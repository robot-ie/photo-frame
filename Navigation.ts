namespace photoFrame {

    export class Navigation {
        private leftButton: TouchButton = new TouchButton(DigitalPin.P1)
        private rightButton: TouchButton = new TouchButton(DigitalPin.P0)

        constructor() {

        }
        onLeftButtonChanged(handler: () => void) {
            this.leftButton.setHandler(handler)
        }
        onRightButtonChanged(handler: () => void) {
            this.rightButton.setHandler(handler)
        }
        init() {
            basic.forever(function () {
                this.leftButton.evaluate();
                this.rightButton.evaluate();
            })
        }

    }
}