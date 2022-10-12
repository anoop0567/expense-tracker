import "./App.css";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: 1,
    title: "Car Insurance",
    amount: 234,
    date: new Date(),
  },
  {
    id: 2,
    title: "Health Insurance",
    amount: 234,
    date: new Date(),
  },
  {
    id: 3,
    title: "Term Insurance",
    amount: 234,
    date: new Date(),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const saveExpenseHandler = (expenseData) => {
    const newExpenseData = {
      ...expenseData,
      _id: Math.random(),
    };
    setExpenses((prevExpenses) => {
      return [newExpenseData, ...prevExpenses];
    });
  };

  const methodDoesNotExist = () => {
    throw new Error("Somthing went wrong 1");
  };

  return (
    <div className="App">
      <button onClick={methodDoesNotExist}>Break the world</button>
      <NewExpense onSaveExpenseData={saveExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
