namespace photoFrame {

    export class Display {

        constructor() {

        }
        showPhotoAtPosition(position:number){
            //lcdDisplay.lcdDisplayText(convertToText(position), 1, 120, 120, lcdDisplay.FontSize.Large, 0xFF0000)
            const path = `/trip/${position}.png`;
            lcdDisplay.lcdDisplayIamge(1, path, 0, 0, 256)
        }
        init() {
            lcdDisplay.lcdInitIIC()            
            lcdDisplay.lcdClearAll()
            lcdDisplay.lcdSetBgcolor(0xFFFF00)
        }

    }
}