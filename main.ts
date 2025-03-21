namespace photoFrame {

    const photoFrame = new PhotoFrame();
    photoFrame.init();
    photoFrame.lights.changeLedColor(NeoPixelColors.Green);


    //% block
    //% group="Basic"
    export function turnLedAtPosition(position: number) {
        photoFrame.lights.turnLedAt(position)
    }

    //% block
    //% group="Basic"
    export function showPhotoAtPosition(position: number) {
        photoFrame.display.showPhotoAtPosition(position)
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

    //% block
    //% group="Basic"
    export function onCommandHeard(commandType: VoiceRecognitionCommandType, handler: () => void) {
        photoFrame.voiceRecognition.onCommandHeard(commandType, handler)
    }


    //% block
    //% group="Basic"
    export function startAutomaticControlAtPosition(position: number, isRandom: boolean) {
        photoFrame.lights.changeLedColor(isRandom ? NeoPixelColors.Blue : NeoPixelColors.White);
        photoFrame.automaticControl.startAutomaticControl(position, isRandom)
    }

    //% block
    //% group="Basic"
    export function onAutomaticPositionChanged(handler: () => void) {
        photoFrame.automaticControl.setAutomicControlEmissionsCallback(handler)
    }

    //% block
    //% group="Basic"
    export function getAutomaticPosition() {
        return photoFrame.automaticControl.position;
    }


    //% block
    //% group="Basic"
    export function stopAutomicControl() {
        photoFrame.lights.changeLedColor(NeoPixelColors.Green);
        photoFrame.automaticControl.stop();
    }


}