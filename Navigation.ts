namespace photoFrame {
    export class Navigation {
        private strip: neopixel.Strip
        constructor() {
        }
        init() {
            this.strip = neopixel.create(DigitalPin.P2, 20, NeoPixelMode.RGB)
            this.strip.setBrightness(15)
            this.strip.showColor(neopixel.colors(NeoPixelColors.Black))
        }


        turnLedAt(position: number) {
            this.strip.showColor(neopixel.colors(NeoPixelColors.Black))
            this.strip.setPixelColor(position - 1, neopixel.colors(NeoPixelColors.Green))
            this.strip.show()
        }

    }
}