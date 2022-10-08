import Card from "./Card";
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

  return <Card className="expenses">{items}</Card>;
}

export default ExpenseList;
