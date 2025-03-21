namespace photoFrame {
    class TouchButton {
        private lastTimeOnTimestamp: number = 0
        private pin: DigitalPin
        private handler: () => void
        constructor(pin: DigitalPin) {
            this.pin = pin;
        }
        setHandler(handler:()=>void){
            this.handler = handler;
        }
        evaluate() {
            if (!this.handler){
                return;
            }
            const currentTime = control.millis()
            const buttonSignal = pins.digitalReadPin(DigitalPin.P0)
            if (buttonSignal == 1) {
                if (currentTime >= this.lastTimeOnTimestamp + 1000) {
                    this.lastTimeOnTimestamp = currentTime
                    this.handler();
                }
            }
        }
    }
    export class Navigation {
        private leftButton: TouchButton = new TouchButton(DigitalPin.P1)
        private rightButton: TouchButton = new TouchButton(DigitalPin.P0)

        constructor() {

        }
        onLeftButtonChanged(handler: () => void) {
            this.leftButton.setHandler(handler)

        }
        init() {
            basic.forever(function () {
                this.leftButton.evaluate();
            })
        }

    }
}