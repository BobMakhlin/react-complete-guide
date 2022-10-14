import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./ExpenseList.css";

const ExpenseList = (props) => {
  const [year, setYear] = useState("2020");

  const yearChangeHandler = (year) => {
    setYear(year);
  };

  var items = props.expenses.map((expense) => (
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ));

  return (
    <Card className="expenses">
      <ExpensesFilter year={year} onFilterChange={yearChangeHandler} />
      {items}
    </Card>
  );
};

export default ExpenseList;
