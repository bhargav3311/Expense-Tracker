
import Expenses from './components/Expenses/Expenses';
function App() {

  const expenses = [
        {
            id: 'e1',
            title: 'Entertainment',
            amount: 500,
            date: new Date(2021, 2, 10),
        },
        { id: 'e2', title: 'Electricity', amount: 350, date: new Date(2021, 4, 31) },
        {
            id: 'e3',
            title: 'Travel',
            amount: 5000,
            date: new Date(2021, 2, 28),
        },
        {
            id: 'e4',
            title: 'Groceries',
            amount: 1000,
            date: new Date(2021, 5, 19),
        },
    ];
  return (
    <div className="App">

     
      <Expenses items={expenses}/>

    </div>
  );
}

export default App;
