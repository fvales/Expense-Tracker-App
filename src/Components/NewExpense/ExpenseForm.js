import { useState } from 'react';
import './ExpenseForm.css';

export const ExpenseForm = (props) => {
    const [task, setTask] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const taskChangeHandler = (event) => {
        setTask(event.target.value);
    }

    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            task,
            amount: Number(amount),
            date
        }
        props.onSaveExpenseData(expenseData);
        setTask('');
        setAmount('');
        setDate('');
    }

    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={task} onChange={taskChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="1" step="1" value={amount} onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2022-01-01" value={date} onChange={dateChangeHandler} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="button" onClick={() => props.showNewExpenseForm(false)}>Cancel</button>
            <button type="submit">Add Expense</button>
        </div>
    </form>
}