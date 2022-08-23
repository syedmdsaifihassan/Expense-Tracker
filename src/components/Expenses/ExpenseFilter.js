import React from "react";
import './ExpenseFilter.css';

const ExpenseFilter = (props) => {
    const yearChangeHandler = (event) => {
        // console.log('ExpenseFilter.js');
        // console.log(event.target.value);
        props.onFilterYearSelect(event.target.value);
    };

    return (
        React.createElement('div', {className: 'expenses-filter'},
            React.createElement('div', {className: 'expenses-filter__control'}, 
                React.createElement('label', {}, 'Filter by Year'),
                React.createElement('select', {value: props.selected , onChange: yearChangeHandler},
                    // React.createElement('option', {value: ''}),
                    React.createElement('option', {value: '2022'}, '2022'),
                    React.createElement('option', {value: '2021'}, '2021'),
                    React.createElement('option', {value: '2020'}, '2020'),
                    React.createElement('option', {value: '2019'}, '2019')
                )
            )
        )
    );
};

export default ExpenseFilter;