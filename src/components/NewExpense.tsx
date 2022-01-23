import React, { useState } from "react";
import store from "../store/store";
import { observer } from "mobx-react-lite";
import ExpenseForm from "./ExpenseForm";

const NewExpense: React.FC = () => {
  console.log("store", store);

  const [enteredTitle, setEnteredTitle] = useState<string>("");
  const [enteredAmount, setEnteredAmount] = useState<string>("");
  const [isTitleTouched, setIsTitleTouched] = useState<boolean>(false);
  const [isAmountTouched, setIsAmountTouched] = useState<boolean>(false);

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

    //add to store
    store.addExpense(enteredTitle, enteredAmount);
    //convert to euro
    store.convertToEuro();

    //reset validation
    setEnteredTitle("");
    setEnteredAmount("");
    setIsTitleTouched(false);
    setIsAmountTouched(false);
  };

  return (
    <ExpenseForm
      title={enteredTitle}
      amount={enteredAmount}
      inputsInvalid={enteredInputsInvalid}
      submitForm={submitHandler}
      titleChange={titleChangeHandler}
      amountChange={amountChangeHandler}
      titleBlur={titleBlurHandler}
      amountBlur={amountBlurHandler}
    />
  );
};

export default observer(NewExpense);
