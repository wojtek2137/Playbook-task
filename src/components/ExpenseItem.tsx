// import classes from './TodoItem.module.css';
import { useContext, useEffect } from "react";
import { ExpenseContext } from "../store/expense-context";
import "./ExpensesTable.css";
const ExpenseItem: React.FC<{
  title: string;
  amountPLN: string;
  amountEUR: string;
  onRemoveExpense: () => void;
}> = (props) => {
  const expenseCtx = useContext(ExpenseContext);
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
