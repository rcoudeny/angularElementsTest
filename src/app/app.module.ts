import { CounterInterface } from 'shared/CounterInterface';
import { Injector, NgModule } from '@angular/core';
import { createCustomElement, NgElement, WithProperties } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { CounterComponent } from './widgets/counter/counter.component';

@NgModule({
  declarations: [
    CounterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [CounterComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const counterElement = createCustomElement(CounterComponent, { injector });
    window.customElements.define('counter-widget', counterElement);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'counter-widget': NgElement & WithProperties<{ acmWidget: CounterInterface }>;
  }
}