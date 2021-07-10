


//setStateFunc is from chatBot
class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
        this.createClientMessage = createClientMessage;
    }

    eventHandler = () => {
        const message = this.createChatBotMessage("Hello. I'm Bot.")
        this.setchatbotMessage(message)
    }

   setchatbotMessage = (message) => {
    this.setState(state => ({ ...state, messages: [...state.messages, message] }))
   }

   todosHandler =() => {
       const message = this.createChatBotMessage("Sure. Here's your todos.", {
            widget:"todos"
       })
       this.setchatbotMessage(message);
   }
}

export default ActionProvider;