import { useState } from 'react';
import './App.css';
import { Expenses } from './Components/Expenses/Expenses';
import { NewExpense } from './Components/NewExpense/NewExpense';

function App() {
  const [expenseArray, setExpenseArray] = useState([])

  const onAddExpense = (expenseData) => {
    setExpenseArray((prevExpenseArray) => [...prevExpenseArray, expenseData])
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={onAddExpense} />
      <Expenses expenses={expenseArray} />
    </div >
  );
}

export default App;
