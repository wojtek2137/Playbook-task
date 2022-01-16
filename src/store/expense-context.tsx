import React, { useState } from "react";

import Expense from "../models/expense";

type ExpensesContextObj = {
  items: Expense[];
  euro: number;
  total: number;
  addExpense: (text: string, amount: string) => void;
  removeExpense: (id: string, amount: string) => void;
  addEuroRate: (rate: string) => void;
  roundNumber: (num: number) => number;
};

export const ExpenseContext = React.createContext<ExpensesContextObj>({
  items: [],
  euro: 4.382,
  total: 0,
  addExpense: (text: string, amount: string) => {},
  removeExpense: (id: string, amount: string) => {},
  addEuroRate: (rate: string) => {},
  roundNumber: (num: number) => num,
});

const ExpenseContextProvider: React.FC = (props) => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [totalValue, setTotalValue] = useState(0);
  const [ownEuroRate, setOwnEuroRate] = useState(4.382);

  const addExpenseHandler = (expenseTitle: string, expenseAmount: string) => {
    const newExpense = new Expense(expenseTitle, expenseAmount);

    setExpenses((prevExpense) => {
      return prevExpense.concat(newExpense);
    });
    setTotalValue((prevTotal) => (prevTotal += parseFloat(expenseAmount)));
  };

  const removeExpenseHandler = (expenseId: string, expenseAmount: string) => {
    setExpenses((prevExpense) => {
      return prevExpense.filter((expense) => expense.id !== expenseId);
    });
    if (totalValue > 0) {
      setTotalValue((prevTotal) => {
        return roundToTwo((prevTotal -= parseFloat(expenseAmount)));
      });
    } else setTotalValue(0);
  };
  const addEuroRateHandler = (euroRate: string) => {
    euroRate !== "" ? setOwnEuroRate(parseFloat(euroRate)) : setOwnEuroRate(0);
  };
  const roundToTwo = (num: number) => {
    let m = Number((Math.abs(num) * 100).toPrecision(15));
    return (Math.round(m) / 100) * Math.sign(num);
  };

  const contextValue: ExpensesContextObj = {
    items: expenses,
    euro: ownEuroRate,
    total: totalValue,
    addExpense: addExpenseHandler,
    removeExpense: removeExpenseHandler,
    addEuroRate: addEuroRateHandler,
    roundNumber: roundToTwo,
  };

  return (
    <ExpenseContext.Provider value={contextValue}>
      {props.children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseContextProvider;
