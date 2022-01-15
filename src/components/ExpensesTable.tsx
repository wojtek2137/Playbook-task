import React, { useContext } from "react";

import ExpenseItem from "./ExpenseItem";
import { ExpenseContext } from "../store/expense-context";
import "./ExpensesTable.css";

const ExpensesTable: React.FC = () => {
  const expenseCtx = useContext(ExpenseContext);
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
        {expenseCtx.items.map((item) => (
          <ExpenseItem
            euro={expenseCtx.euro}
            key={item.id}
            title={item.title}
            amount={item.amount}
            onRemoveExpense={expenseCtx.removeExpense.bind(
              null,
              item.id,
              item.amount
            )}
          />
        ))}
      </tbody>
    </table>
  );
};

export default ExpensesTable;
