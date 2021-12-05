import { useState } from "react";
import { ExpenseForm } from "./ExpenseForm"
import './NewExpense.css';

export const NewExpense = (props) => {
    const [showNewExpenseForm, setShowNewExpenseForm] = useState(false);

    const onSaveExpenseData = (expenseData) => {
        props.onAddExpense(expenseData)
    }

    return <div className="new-expense">
        {
            !showNewExpenseForm ?
                <button onClick={() => setShowNewExpenseForm(true)}>Add New Expense</button> :
                <ExpenseForm onSaveExpenseData={onSaveExpenseData} showNewExpenseForm={setShowNewExpenseForm} />
        }
    </div>
}