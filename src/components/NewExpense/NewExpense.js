import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [creationModeActive, setCreationModeAction] = useState(false);

  const submitHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setCreationModeAction(false);
  };

  const cancellationHandler = () => {
    setCreationModeAction(false);
  };
  
  const addButtonClickHandler = () => {
    setCreationModeAction(true);
  };

  return (
    <div className="new-expense">
      {!creationModeActive && (
        <button onClick={addButtonClickHandler}>Add New Expense</button>
      )}
      {creationModeActive && (
        <ExpenseForm onSubmit={submitHandler} onCancel={cancellationHandler} />
      )}
    </div>
  );
};

export default NewExpense;
