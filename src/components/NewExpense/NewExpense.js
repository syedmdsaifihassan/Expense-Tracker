import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        console.log(expenseData);
        props.onAddExpense(expenseData);
    };

    return(
        React.createElement('div', {className: 'new-expense'}, 
            React.createElement(ExpenseForm, {onSaveExpenseData: saveExpenseDataHandler})
        )
    );
};

export default NewExpense;