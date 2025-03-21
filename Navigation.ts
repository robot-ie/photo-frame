namespace photoFrame {
    export class Navigation {
        private lastTimeOnTimestamp: number = 0
        constructor() {

        }
        onLeftButtonChanged(handler: () => void) {
            basic.forever(function () {
                const currentTime = control.millis()
                const leftButtonSignal = pins.digitalReadPin(DigitalPin.P0)
                if (leftButtonSignal == 1) {
                    if (currentTime >= this.lastTimeOnTimestamp + 1000) {
                        this.lastTimeOnTimestamp = currentTime
                        handler();
                    }
                }
            })
        }

    }
}