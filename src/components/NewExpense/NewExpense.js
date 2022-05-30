import './NewExpense.css';

import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={(expenseData)=>{
                props.onSaveExpenseData(expenseData);
            }}/>
        </div>
    )
}

export default NewExpense;