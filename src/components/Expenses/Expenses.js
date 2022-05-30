import './Expenses.css';


import { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import Card from '../UI/Card';

const Expenses = ({ item }) => {
    const [filteredYear, setFilteredYear] = useState('2022');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    return (
        <Card className='expenses'>
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <div>
                <ExpenseItem
                    title={item[0].title}
                    amount={item[0].amount}
                    date={item[0].date}
                />
                <ExpenseItem
                    title={item[1].title}
                    amount={item[1].amount}
                    date={item[1].date}
                />
                <ExpenseItem
                    title={item[2].title}
                    amount={item[2].amount}
                    date={item[2].date}
                />
            </div>
        </Card>
    )
}

export default Expenses;