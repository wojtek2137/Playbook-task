import React from "react";
import store from "../store/store";
import { observer } from "mobx-react-lite";
import ExpenseForm from "./ExpenseForm";

const NewExpense: React.FC = () => {
  console.log("store", store);

  // const enteredInputsValid: boolean =
  //   store.newExpTitle.trim() !== "" && store.newExpAmount.trim() !== "";
  // const enteredInputsInvalid: boolean =
  //   !enteredInputsValid &&
  //   store.isTitleInputTouched &&
  //   store.isAmountInputTouched;

  const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    store.setNewExpTitle(event.target.value);
  };
  const amountChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    store.setNewExpAmount(event.target.value);
  };
  const titleBlurHandler = () => {
    store.setIsTitleInputTouched(true);
  };
  const amountBlurHandler = () => {
    store.setIsAmountInputTouched(true);
  };
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    store.setIsTitleInputTouched(true);
    store.setIsAmountInputTouched(true);

    if (store.inputsInvalid) return;

    //add to store
    store.addExpense(store.newExpTitle, store.newExpAmount);
    //convert to euro
    store.convertToEuro();
  };

  return (
    <ExpenseForm
      title={store.newExpTitle}
      amount={store.newExpAmount}
      inputsInvalid={store.inputsInvalid}
      submitForm={submitHandler}
      titleChange={titleChangeHandler}
      amountChange={amountChangeHandler}
      titleBlur={titleBlurHandler}
      amountBlur={amountBlurHandler}
    />
  );
};

export default observer(NewExpense);
