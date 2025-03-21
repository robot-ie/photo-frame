
namespace photoFrame {

    export class AutomaticControl {
        private lastTimeOnTimestamp: number = 0
        private isRunning: boolean = false
        private isRandom: boolean = false
        private position: number

        private handler: (position: number) => void

        constructor() {

        }
        startAutomaticControl(position: number, handler: (position: number) => void) {
            this.isRunning = true;
            this.position = position;
            this.handler = handler;
        }
        startRandomControl(position: number, handler: (position: number) => void) {
            this.isRunning = true;
            this.isRandom = true;
            this.position = position;
            this.handler = handler;
        }
        stop() {
            this.isRunning = false;
            this.isRandom = false;
            this.position = 0;
            this.handler = null;
        }
        evaluate() {

            const currentTime = control.millis()

            if (this.isRunning) {
                if (!this.isRandom) {
                    this.position = this.position + 1;
                }
                else {
                    this.position = randint(0, 19) + 1
                }
                if (currentTime >= this.lastTimeOnTimestamp + 1000) {
                    this.lastTimeOnTimestamp = currentTime
                    this.handler(this.position);
                }
            }
            else{
                this.lastTimeOnTimestamp = 0
            }
        }
        init() {
            basic.forever(function () {
                this.evaluate();
            })
        }
    }

}
