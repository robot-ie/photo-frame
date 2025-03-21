namespace photoFrame {
    export class Lights {
        private strip: neopixel.Strip
        private color: NeoPixelColors = NeoPixelColors.Green
        constructor() {
        }
        init() {
            this.strip = neopixel.create(DigitalPin.P2, 20, NeoPixelMode.RGB)
            this.strip.setBrightness(15)
            this.strip.showColor(neopixel.colors(NeoPixelColors.Black))
        }
        changeLedColor(color: NeoPixelColors){
            this.color = color;
        }

        turnLedAt(position: number) {
            this.strip.showColor(neopixel.colors(NeoPixelColors.Black))
            this.strip.setPixelColor(position - 1, neopixel.colors(this.color))
            this.strip.show()
        }

    }
}