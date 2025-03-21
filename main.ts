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
    export function onLeftButtonActive(handler: () => void) {
        photoFrame.navigation.onLeftButtonChanged(handler)
    }

    //% block
    //% group="Basic"
    export function onRightButtonActive(handler: () => void) {
        photoFrame.navigation.onRightButtonChanged(handler)
    }



}