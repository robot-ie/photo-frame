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
    export function onNext(handler: () => void) {
       handler();
    }




}