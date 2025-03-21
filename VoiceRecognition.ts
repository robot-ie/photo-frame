namespace photoFrame {
    enum CommandType {
        GoBack,
        GoNext,
    }
    export class VoiceRecognition {
        commandsCallBacks: { learningCommand: voiceRecognition.LearningCommandWords, handler: () => void }[]
        constructor() {

        }
        onCommandHeard(commandType: CommandType, handler: () => void) {
            let learningCommand;
            if (commandType == CommandType.GoBack) {
                learningCommand = voiceRecognition.LearningCommandWords.W6
            }
            else if (commandType == CommandType.GoNext) {
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