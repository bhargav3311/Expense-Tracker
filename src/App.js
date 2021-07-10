import React, {useState} from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense'

import Chatbot from 'react-chatbot-kit'
import ActionProvider from './components/ChatBot/ActionProvider';
import MessageParser from './components/ChatBot/MessageParser';
import Config from './components/ChatBot/Config';
import bot from './img/Bot4.svg.svg'
import './components/ChatBot/BotAvatar.css'

// import StateList from './components/StateList'

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {

  const [showBot, toggleBot] = useState(false);

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
      
      {/* <StateList/> */}

      {showBot && (
        <Chatbot
          config={Config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      )}
      <button className="bot-avatar-button" onClick={() => toggleBot((prev) => !prev)}>
        <img className="bot-avatar" src={bot} />
      </button>
    </div>
  );
}

export default App;
