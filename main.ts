namespace photoFrame {

    const photoFrame = new PhotoFrame();
    photoFrame.init();

    //% block
    //% group="Basic"
    export function initFrame(): boolean {
        return true;
    }

    //% block
    //% group="Basic"
    export function turnLedAtPosition(position:number) {
        photoFrame.lights.turnLedAt(position)
    }



    //% block
    //% group="Basic"
    export function onNext(handler: () => void) {
       handler();
    }




}