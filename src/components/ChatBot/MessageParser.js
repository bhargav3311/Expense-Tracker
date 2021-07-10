


//Inside this Message Parser we have acces to ActionProvider and ChatBot state
class MessageParser {
    constructor(actionProvider, state) {
        this.actionProvider = actionProvider;
        this.state = state;
    }

    parse(message) {
        
        const lowercase = message.toLowerCase()
        console.log(this.state);

        if(lowercase.includes("hello") || ("hi") || ("ESports")){
            //console.log("Hi! I'm ESports Bot...")
            this.actionProvider.eventHandler()
        }

        if(lowercase.includes("todos")){
            this.actionProvider.todosHandler()
        }

        
    }
}

export default MessageParser;