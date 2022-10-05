import { CounterElementInterface } from './../shared/CounterInterface';
const upCounterWidget = (widgetId: string) => {
    const counterElement = document.getElementById(widgetId) as CounterElementInterface;
    if (counterElement) {
        counterElement.acmWidget.upCount();
        console.log(counterElement.acmWidget);

    }
}

let buttonElements = document.getElementsByClassName("customCounter");
for (let i = 0; i < buttonElements.length; i++) {
    const button: HTMLButtonElement = buttonElements[i] as HTMLButtonElement;
    button.addEventListener("click", function () {
        if (button.textContent) {
            upCounterWidget(button.textContent);
        }
    });
}