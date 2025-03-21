namespace photoFrame {
export class TouchButton {
        private lastTimeOnTimestamp: number = 0
        private pin: DigitalPin
        private handler: () => void
        constructor(pin: DigitalPin) {
            this.pin = pin;
        }
        setHandler(handler: () => void) {
            this.handler = handler;
        }
        evaluate() {
            if (!this.handler) {
                return;
            }
            const currentTime = control.millis()
            const buttonSignal = pins.digitalReadPin(this.pin)
            if (buttonSignal == 1) {
                if (currentTime >= this.lastTimeOnTimestamp + 1000) {
                    this.lastTimeOnTimestamp = currentTime
                    this.handler();
                }
            }
            else{
                this.lastTimeOnTimestamp = 0
            }
        }
    }

}
