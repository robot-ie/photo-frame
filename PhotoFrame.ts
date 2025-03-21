namespace photoFrame {
    export class PhotoFrame {
        lights: Lights = new Lights();
        navigation: Navigation = new Navigation();
        voiceRecognition: VoiceRecognition = new VoiceRecognition();
        display: Display = new Display();
        constructor() {
        }

        init() {
            pins.setAudioPinEnabled(false)
            this.lights.init();
            this.navigation.init();
            this.voiceRecognition.init();
            this.display.init();
        }
    }
}
