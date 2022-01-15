import React from "react";
import { useState, useContext } from "react";
import { ExpenseContext } from "../store/expense-context";
import "./NewExpense.css";

const NewExpense: React.FC = () => {
  const expenseCtx = useContext(ExpenseContext);
  console.log("expense", expenseCtx);

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [isTitleTouched, setIsTitleTouched] = useState(false);
  const [isAmountTouched, setIsAmountTouched] = useState(false);

  const enteredInputsValid: boolean =
    enteredTitle.trim() !== "" && enteredAmount.trim() !== "";
  const enteredInputsInvalid: boolean =
    !enteredInputsValid && isTitleTouched && isAmountTouched;

  const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredAmount(event.target.value);
  };
  const titleBlurHandler = () => {
    setIsTitleTouched(true);
  };
  const amountBlurHandler = () => {
    setIsAmountTouched(true);
  };
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    setIsTitleTouched(true);
    setIsAmountTouched(true);

    if (!enteredInputsValid) return;

    expenseCtx.addExpense(enteredTitle, enteredAmount);

    setEnteredTitle("");
    setEnteredAmount("");
    setIsTitleTouched(false);
    setIsAmountTouched(false);
  };
  const inputsClasses = enteredInputsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className={inputsClasses}>
        <div className="title-input">
          {" "}
          <label htmlFor="title">Title of transaction</label>
          <input
            type="text"
            id="title"
            minLength={5}
            value={enteredTitle}
            onChange={titleChangeHandler}
            onBlur={titleBlurHandler}
          />
        </div>{" "}
        <div className="amount-input">
          <label htmlFor="amount">Amount (in PLN)</label>
          <input
            type="number"
            id="amount"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
            onBlur={amountBlurHandler}
          />

          <button type="submit" className="form-actions">
            Add
          </button>
        </div>
        {enteredInputsInvalid && (
          <p className="error-text">all inputs are required.</p>
        )}
      </div>
    </form>
  );
};

export default NewExpense;
