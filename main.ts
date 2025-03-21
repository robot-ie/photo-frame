namespace photoFrame {

    const photoFrame = new PhotoFrame();
    photoFrame.init();
    photoFrame.lights.changeLedColor(NeoPixelColors.Green);


    //% block
    //% group="Lights"
    export function turnLedAtPosition(position: number) {
        photoFrame.lights.turnLedAt(position)
    }

    //% block
    //% group="Screen"
    export function showPhotoAtPosition(position: number) {
        photoFrame.display.showPhotoAtPosition(position)
    }


    //% block
    //% group="Buttons"
    export function onLeftButtonActive(handler: () => void) {
        photoFrame.navigation.onLeftButtonChanged(handler)
    }

    //% block
    //% group="Buttons"
    export function onRightButtonActive(handler: () => void) {
        photoFrame.navigation.onRightButtonChanged(handler)
    }

    //% block
    //% group="Voice"
    export function onCommandHeard(commandType: VoiceRecognitionCommandType, handler: () => void) {
        photoFrame.voiceRecognition.onCommandHeard(commandType, handler)
    }



    
    //% block="start Automatic Control at Position $position| shuffle  $isRandom"
    //% group="Automatic Control"
    //% inlineInputMode=inline
    export function startAutomaticControlAtPosition(position: number, isRandom: boolean) {
        photoFrame.lights.changeLedColor(isRandom ? NeoPixelColors.Blue : NeoPixelColors.White);
        photoFrame.automaticControl.startAutomaticControl(position, isRandom)
    }

    //% block
    //% group="Automatic Control"
    export function onAutomaticPositionChanged(handler: () => void) {
        photoFrame.automaticControl.setAutomicControlEmissionsCallback(handler)
    }

    //% block
    //% group="Automatic Control"
    export function getAutomaticPosition() {
        return photoFrame.automaticControl.position;
    }


    //% block
    //% group="Automatic Control"
    export function stopAutomicControl() {
        photoFrame.lights.changeLedColor(NeoPixelColors.Green);
        photoFrame.automaticControl.stop();
    }


}