import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    // const [enteredTitle, setEnteredTitle] = useState('');
    // const [enteredAmount, setEnteredAmount] = useState('');
    // const [enteredDate, setEnteredDate] = useState('');

    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });

    const [showForm, setShowForm] = useState(false);
    const [showBtn, setShowBtn] = useState(true);

    const titleChangeHandler = (event) => {
        // setEnteredTitle(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // });

        setUserInput((prevState) => {
            return { ...prevState, enteredTitle: event.target.value };
        });
    };
    const amountHandler = (event) => {
        // setEnteredAmount(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // });

        setUserInput((prevState) => {
            return { ...prevState, enteredAmount: event.target.value };
        });
    };
    const dateHandler = (event) => {
        // setEnteredDate(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // });

        setUserInput((prevState) => {
            return { ...prevState, enteredDate: event.target.value };
        });
    }; 

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: userInput.enteredTitle,
            amount: +userInput.enteredAmount,
            date: new Date(userInput.enteredDate)
        };

        props.onSaveExpenseData(expenseData);
        setUserInput({
            enteredTitle: '',
            enteredAmount: '',
            enteredDate: ''
        })

        setShowForm(false);
        setShowBtn(true);
    };

    
    const displayForm = () => {
        setShowForm(true);
        setShowBtn(false);
    };

    return(

        <div>

            {showBtn && (
                <div className="new-expense__form">
                    <button onClick={displayForm}>Add Expense</button>
            </div>
            )}
            {showForm && (
                <form onSubmit={submitHandler}>
                    <div className="main_form">
                        <div className="new-expense__controls">
                            <div className="new-expense__control">
                                <label>Title</label>
                                <input type='text' value={userInput.enteredTitle} onChange={titleChangeHandler}></input>
                            </div>
                            <div className="new-expense__control">
                                <label>Amount</label>
                                <input type='number' value={userInput.enteredAmount} onChange={amountHandler} min='0.01' step='0.01'></input>
                            </div>
                            <div className="new-expense__control">
                                <label>Date</label>
                                <input type='date' value={userInput.enteredDate} onChange={dateHandler} min='2019-01-01' max='2022-12-31'></input>
                            </div>
                        </div>
                        <div className="new-expense__actions">
                            <button type='submit'>Add Expense</button>
                        </div>
                    </div>
                </form>
            )}
        </div>
        

        // React approach
        // React.createElement('form', {onSubmit: submitHandler}, 
        //     React.createElement('div', {className: 'new-expense__controls'}, 
        //         React.createElement('div', {className: 'new-expense__control'},
        //             React.createElement('label', {}, 'Title'),
        //             React.createElement('input', {type: 'text', value: userInput.enteredTitle ,onChange: titleChangeHandler })
        //         ),
        //         React.createElement('div', {className: 'new-expense__control'},
        //             React.createElement('label', {}, 'Amount'),
        //             React.createElement('input', {type: 'number', min:'0.01', step: '0.01', value: userInput.enteredAmount ,onChange: amountHandler })
        //         ),
        //         React.createElement('div', {className: 'new-expense__control'},
        //             React.createElement('label', {}, 'Date'),
        //             React.createElement('input', {type: 'date', min: '2019-01-01', max: '2022-12-31', value: userInput.enteredDate ,onChange: dateHandler })
        //         )
        //     ),
        //     React.createElement('div', {className: 'new-expense__actions'}, 
        //         React.createElement('button', {type: 'submit'}, 'Add Expense')
        //     )
        // )
    );
};

export default ExpenseForm;