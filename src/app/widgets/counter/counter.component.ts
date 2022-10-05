import { ChangeDetectorRef, Component, ElementRef, Input } from '@angular/core';
import { CounterInterface } from 'shared/CounterInterface';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements CounterInterface {

  @Input()
  count: number = 0;
  @Input()
  id: string = "Counter";
  testje: string = "jajaja";

  constructor(private host: ElementRef, private cdr: ChangeDetectorRef) {
    this.host.nativeElement.acmWidget = {
      upCount: this.upCount.bind(this),
      getCount: this.getCount.bind(this),
      setCount: this.setCount.bind(this)
    };
  }

  upCount() {
    this.count++;
    debugger;
    this.cdr.detectChanges();
  }

  setCount(value: number) {
    this.count = value;
    this.cdr.detectChanges();
  }

  getCount() {
    return this.count;
  }
}
