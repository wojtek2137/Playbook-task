// import classes from './TodoItem.module.css';
import { useContext, useEffect } from "react";
import store from "../store/store";
import "./ExpensesTable.css";
const ExpenseItem: React.FC<{
  title: string;
  amountPLN: string;
  amountEUR: string;
  onRemoveExpense: () => void;
}> = (props) => {
  return (
    <tr>
      <td>{props.title} </td>
      <td>{props.amountPLN}</td>
      <td>{props.amountEUR}</td>
      <td className="td-hover" onClick={props.onRemoveExpense}>
        Delete
      </td>
    </tr>
  );
};

export default ExpenseItem;
