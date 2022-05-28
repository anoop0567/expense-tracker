import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import { useState } from 'react';

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);

    const onClickHandler = () => {
        console.log('clicked');
        setTitle('hi')
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
                <button onClick={onClickHandler}>Change Title</button>
            </div>
        </Card>
    )
}

export default ExpenseItem;