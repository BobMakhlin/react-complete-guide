import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css';

function ExpenseList(props) {
  var items = props.expenses.map((expense) => (
    <ExpenseItem
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ));

  return <div className="expenses">{items}</div>;
}

export default ExpenseList;
