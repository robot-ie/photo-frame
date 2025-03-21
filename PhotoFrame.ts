namespace photoFrame {
    export class PhotoFrame {
        lights: Lights = new Lights();
        constructor() {
        }

        init() {
            pins.setAudioPinEnabled(false)
            this.lights.init();
        }
    }
}
