"use strict";
exports.__esModule = true;
var upCounterWidget = function (widgetId) {
    var counterElement = document.getElementById(widgetId);
    if (counterElement) {
        counterElement.acmWidget.upCount();
        console.log(counterElement.acmWidget);
    }
};
var buttonElements = document.getElementsByClassName("customCounter");
var _loop_1 = function (i) {
    var button = buttonElements[i];
    button.addEventListener("click", function () {
        if (button.textContent) {
            upCounterWidget(button.textContent);
        }
    });
};
for (var i = 0; i < buttonElements.length; i++) {
    _loop_1(i);
}
