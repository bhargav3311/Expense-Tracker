import React from 'react'
import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "./BotAvatar";
import EventList from './EventList';

const config = {
    initialMessages: [createChatBotMessage(`Hi, I'm Bot. How can I help you...`)],
    botName:"Bot",
    customComponents:{
        botAvatar:(props) => <BotAvatar {...props}/>
    },

    //Chat box components
    customStyles: {
        botMessageBox:{
            backgroundColor: "rgb(19, 133, 53)",
        },

        chatButton: {
            backgroundColor: "rgb(19, 133, 53)",
        },
    },

    state:{
            //eventTitle:["List of Events", "ESports"]
            todos:[]
    },

    //components that we create on our own
    widgets:[
        {
            widgetName: "todos",
            widgetFunc: (props) => <EventList {...props} />,
            mapStateToProps: ["todos"],
        }
    ]
}

export default config