import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {

    // const [title, setTitle] = useState(props.title);
    // const clickHandler = ()  => {
    //     setTitle('Updated!!!');
    //     console.log(title);
    // };

    // React approach
    return (
        React.createElement(Card, {className: 'expense-item'},
            React.createElement(ExpenseDate, {date: props.date}),
            React.createElement('div', {className: 'expense-item__description'},
                React.createElement('h2', {}, props.title),
                React.createElement('div', {className: 'expense-item__price'}, '$ '+props.amount)
            )
            // React.createElement('button', {onClick: clickHandler}, 'Change Title')
        )
    );
    
    // JSX aproach
    // return(
    //     <Card className="expense-item">
    //         <ExpenseDate date={props.date}></ExpenseDate>
    //         <div className="expense-item__description">
    //             <h2>{props.title}</h2>
    //             <div className="expense-item__price">${props.amount}</div>
    //         </div>
    //     </Card>
    // );
}

export default ExpenseItem;  