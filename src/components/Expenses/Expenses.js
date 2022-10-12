import './Expenses.css';


import { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import Card from '../UI/Card';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2022');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    console.log('called')
    const filteredExpenses = props.item.filter(() => {
        return props.item.filter(expense => expense.date.getFullYear() === filteredYear);
    });
    console.log('filtered data', filteredExpenses);

    return (
        <Card className='expenses'>
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            {
                filteredExpenses.map((expense) => {
                    return (
                        <ExpenseItem
                            key={expense.id}
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date}
                        />
                    )
                })
            }
        </Card>
    )
}

export default Expenses;