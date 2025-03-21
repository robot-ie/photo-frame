namespace photoFrame {
    export enum VoiceRecognitionCommandType {
        GoBack,
        GoNext,
    }
    export class VoiceRecognition {
        private commandsCallBacks: { learningCommand: voiceRecognition.LearningCommandWords, handler: () => void }[] = []
        constructor() {

        }
        onCommandHeard(commandType: VoiceRecognitionCommandType, handler: () => void) {
            let learningCommand;
            if (commandType == VoiceRecognitionCommandType.GoBack) {
                learningCommand = voiceRecognition.LearningCommandWords.W6
            }
            else if (commandType == VoiceRecognitionCommandType.GoNext) {
                learningCommand = voiceRecognition.LearningCommandWords.W5
            }
            this.commandsCallBacks.push({
                learningCommand: learningCommand,
                handler: handler
            })
        }

        init() {
            voiceRecognition.init()
            voiceRecognition.setMuteMode(voiceRecognition.MUTE.OFF)
            const commandsCallBacks = this.commandsCallBacks;
            basic.forever(function () {
                voiceRecognition.getCMDID()
                if (voiceRecognition.checkCMDID()) {

                    for (let i = 0; i < commandsCallBacks.length; i++) {
                        const command = commandsCallBacks[i];
                        if (voiceRecognition.readCMDID() == voiceRecognition.checkWord2(command.learningCommand)) {
                            command.handler();
                        }
                    }




                }
            })
        }

    }
}