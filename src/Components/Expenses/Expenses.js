import { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import ExpensesList from './ExpensesList';
import { ExpenseChart } from './ExpenseChart';

export const Expenses = (props) => {

    const [selectedYear, setSelectedYear] = useState('2020');

    const onFilterByYearChange = (year) => {
        setSelectedYear(year);
    }

    const filteredExpenses = props.expenses.filter((item) => new Date(item.date).getFullYear().toString() === selectedYear)

    return (
        <div className="expenses">
            <ExpensesFilter selectedYear={selectedYear} onFilterByYearChange={onFilterByYearChange} />
            <ExpenseChart expenses={filteredExpenses} />
            <ExpensesList expenses={filteredExpenses} />
        </div >
    );
}
