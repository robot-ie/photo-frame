namespace photoFrame {
    export class PhotoFrame {
        lights: Lights = new Lights();
        navigation: Navigation = new Navigation();
        constructor() {
        }

        init() {
            pins.setAudioPinEnabled(false)
            this.lights.init();
            this.navigation.init();
        }
    }
}
