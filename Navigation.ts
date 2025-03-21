namespace photoFrame {
    class TouchButton {
        private lastTimeOnTimestamp: number = 0
        private pin: DigitalPin
        constructor(pin: DigitalPin) {
            this.pin = pin;
        }
        evaluate(handler: () => void) {
            const currentTime = control.millis()
            const buttonSignal = pins.digitalReadPin(DigitalPin.P0)
            if (buttonSignal == 1) {
                if (currentTime >= this.lastTimeOnTimestamp + 1000) {
                    this.lastTimeOnTimestamp = currentTime
                    handler();
                }
            }
        }
    }
    export class Navigation {
        private leftButton: TouchButton = new TouchButton(DigitalPin.P1)
        private rightButton: TouchButton = new TouchButton(DigitalPin.P0)

        private callBacks: {
            left: () => void,
            right: () => void
        }
        constructor() {

        }
        onLeftButtonChanged(handler: () => void) {
            this.callBacks.left = handler;

        }
        init() {
            basic.forever(function () {
                if (this.callBacks.left){
                    this.leftButton.evaluate(this.callBacks.left);
                }
                if (this.callBacks.right) {
                    this.rightButton.evaluate(this.callBacks.right);
                }
            })
        }

    }
}