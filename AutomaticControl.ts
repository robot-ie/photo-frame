
namespace photoFrame {

    export class AutomaticControl {
        private lastTimeOnTimestamp: number = 0
        private isRunning: boolean = false
        private isRandom: boolean = false
        position: number

        private handler: () => void

        constructor() {

        }
        startAutomaticControl(position: number, random:boolean) {
            this.isRunning = true;
            this.isRandom = random;
            this.position = position;
        }
        setAutomicControlEmissionsCallback(handler: () => void){
            this.handler = handler;
        }
        stop() {
            this.isRunning = false;
            this.isRandom = false;
            this.position = 0;
        }
        evaluate() {
            if (!this.handler) {
                return;
            }
            const currentTime = control.millis()

            if (this.isRunning) {
                if (currentTime >= this.lastTimeOnTimestamp + 1000) {

                    if (!this.isRandom) {
                        if (this.position == 20) {
                            this.position = 1;
                        }
                        else {
                            this.position = this.position + 1;
                        }
                    }
                    else {
                        this.position = randint(0, 19) + 1
                    }


                    this.lastTimeOnTimestamp = currentTime
                    this.handler();
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
