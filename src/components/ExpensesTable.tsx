import React, { useContext } from "react";

import ExpenseItem from "./ExpenseItem";
import { ExpenseContext } from "../store/expense-context";
import "./ExpensesTable.css";
const ExpensesTable: React.FC = () => {
  const expenseCtx = useContext(ExpenseContext);
  expenseCtx.convertToEuro();
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Amount(PLN)</th>
          <th>Amount(EUR)</th>
          <th>Option</th>
        </tr>
      </thead>
      <tbody>
        {expenseCtx.expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amountPLN={expense.amountPLN}
            amountEUR={expense.amountEUR}
            onRemoveExpense={expenseCtx.removeExpense.bind(null, expense.id)}
            // onConversionRate={expenseCtx.convertToEuro.}
          />
        ))}
      </tbody>
    </table>
  );
};

export default ExpensesTable;
