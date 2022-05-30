import './App.css';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

function App() {
  const expenses = [
    {
      title: 'Car Insurance',
      amount: 234,
      date: new Date()
    },
    {
      title: 'Health Insurance',
      amount: 234,
      date: new Date()
    },
    {
      title: 'Term Insurance',
      amount: 234,
      date: new Date()
    }
  ]

  const saveExpenseHandler = (expenseData) => {
    const newExpenseData = {
      ...expenseData,
      _id: Math.random()
    };
    console.log(newExpenseData);
  }

  return (
    <div className="App">
      <NewExpense onSaveExpenseData={saveExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
