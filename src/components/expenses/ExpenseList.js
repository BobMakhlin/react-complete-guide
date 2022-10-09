import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css';

function ExpenseList(props) {
  var items = props.expenses.map((expense) => (
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ));

  return <Card className="expenses">{items}</Card>;
}

export default ExpenseList;
