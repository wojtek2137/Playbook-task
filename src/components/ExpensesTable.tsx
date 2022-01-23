import React from "react";
import ExpenseItem from "./ExpenseItem";
import store from "../store/store";
import { observer } from "mobx-react-lite";
import styled from "@emotion/styled";

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin-top: 5%;
  thead {
    background-color: rgba(151, 151, 151, 0.849);
  }
  th,
  td {
    border: 2px solid #000;
    padding: 25px 10px;
    font-size: 1.4rem;
    font-weight: 500;
    text-align: start;
  }
  tbody tr:nth-child(even) {
    background-color: rgba(151, 151, 151, 0.253);
  }
`;
const ExpensesTable: React.FC = () => {
  store.convertToEuro();
  return (
    <Table>
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
          />
        ))}
      </tbody>
    </Table>
  );
};

export default observer(ExpensesTable);
