import React from "react";
import ExpenseItem from "./ExpenseItem";
import store from "../store/store";
import "./ExpensesTable.css";

const ExpensesTable: React.FC = () => {
  store.convertToEuro();
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
        {store.expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amountPLN={expense.amountPLN}
            amountEUR={expense.amountEUR}
            onRemoveExpense={store.removeExpense.bind(null, expense.id)}
            // onConversionRate={expenseCtx.convertToEuro.}
          />
        ))}
      </tbody>
    </table>
  );
};

export default ExpensesTable;
