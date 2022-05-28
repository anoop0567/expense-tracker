import './ExpenseDate.css';

const ExpenseDate = ({ date }) => {
    const expenseDay = date.getDay();
    const expenseMonth = date.toLocaleString('en-US', { month: 'long' });
    const expenseYear = date.getFullYear();

    return (
        <div className="expense-date">
            <div className="expense-date__day">{expenseDay}</div>
            <div className="expense-date__month">{expenseMonth}</div>
            <div className="expense-date__year">{expenseYear}</div>
        </div>
    )
}

export default ExpenseDate;