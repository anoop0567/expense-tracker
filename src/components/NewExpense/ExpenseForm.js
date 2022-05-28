import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
    const [enteredTittle, setEnteredTitle] = useState();
    const [enteredAmount, setEnteredAmount] = useState();
    const [enteredDate, setEnteredDate] = useState();

    // const [userInput, setUserInput] = useState({
    //     enteredTittle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput((prevState)=> {
        //     return {
        //         ...prevState,
        //         enteredTittle: event.target.value
        //     }
        // });
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const formSumbitHandler = (event) => {
        event.preventDefault();
        console.log(enteredTittle, enteredAmount, enteredDate);
    }

    return (
        <form onSubmit={formSumbitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" min="0.01" steps="0.01" onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;