import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterYearSelectHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
        // console.log(selectedYear);
    };

    const expenses = props.items;

    const filteredExpenses = expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    

    return(
        <Card className="expenses">
            <ExpenseFilter 
                selected={filteredYear} 
                onFilterYearSelect={filterYearSelectHandler}
            />
            <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
            <ExpenseList items={filteredExpenses}></ExpenseList>       
        </Card>
    );
}

export default Expenses;