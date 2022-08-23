import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSE = [
  // { 
  //   id: "e1",
  //   title: "Books", 
  //   amount: 100.28, 
  //   date: new Date('2019-08-02') 
  // },
  // { 
  //   id: "e2",
  //   title: "Bag", 
  //   amount: 300, 
  //   date: new Date('2020-07-03') 
  // },
  // { 
  //   id: "e3",
  //   title: "Monitor", 
  //   amount: 200.19, 
  //   date: new Date('2021-08-05')   
  // }, 
  // { 
  //   id: "e4",
  //   title: "Laptop", 
  //   amount: 400, 
  //   date: new Date('2022-04-04') 
  // },
];

const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    });
  };

  //React approach
  return (
    React.createElement('div',{},
      React.createElement(NewExpense, {onAddExpense: addExpenseHandler}),
      React.createElement(Expenses, {items: expenses})
    )
  );

  //JSX approach
  // return (
  //   <div className="App">
  //     <h2>Expense Tracker</h2>
  //     <Expenses items={expenses}></Expenses>
  //   </div>
  // );
}

export default App;
