import React, { useState } from "react";
import Expense from "../models/expense";
import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react-lite";

type ExpensesTypeObj = {
  expenses: Expense[];
  conversionRate: number;
  totalPLN: number;
  totalEUR: number;
  addExpense: (text: string, amount: string) => void;
  removeExpense: (id: string) => void;
  convertToEuro: () => void;
  setConversionRate: (rate: string) => void;
};

const roundNumber = (num: number): number => {
  let m = Number((Math.abs(num) * 100).toPrecision(15));
  return (Math.round(m) / 100) * Math.sign(num);
};

class Store {
  expenses: Expense[] = [];
  conversionRate: number = 4.382;

  constructor() {
    makeAutoObservable(this);
  }

  get totalPLN(): number {
    let sum = 0;
    for (const record of this.expenses) {
      sum += parseFloat(record.amountPLN);
    }
    return roundNumber(sum);
  }

  get totalEUR(): number {
    //for totalEUR
    if (this.conversionRate) {
      return roundNumber(this.totalPLN / this.conversionRate);
    } else return 0;
  }

  convertToEuro = () => {
    //for amountEUR in the table
    for (const expense of this.expenses) {
      expense.amountEUR = this.conversionRate
        ? roundNumber(
            parseFloat(expense.amountPLN) / this.conversionRate
          ).toString()
        : "";
    }
  };

  addExpense = (expenseTitle: string, expenseAmount: string) => {
    const newExpense = new Expense(expenseTitle, expenseAmount);
    this.expenses = this.expenses.concat(newExpense);
  };
  removeExpense = (expenseId: string) => {
    this.expenses = this.expenses.filter((expense) => expense.id !== expenseId);
  };

  setConversionRate = (conversionRate: string): number => {
    return (this.conversionRate =
      conversionRate === "" ? 0 : parseFloat(conversionRate));
  };
}

const store = new Store();

export default store;
