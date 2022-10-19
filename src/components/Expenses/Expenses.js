import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [year, setYear] = useState("2020");

  const yearChangeHandler = (year) => {
    setYear(year);
  };

  const filteredItems = props.expenses.filter((expense) => expense.date.getFullYear().toString() === year);

  return (
    <Card className="expenses">
      <ExpensesFilter year={year} onFilterChange={yearChangeHandler} />
      <ExpensesChart expenses={filteredItems} />
      <ExpenseList expenses={filteredItems} />
    </Card>
  );
};

export default Expenses;
