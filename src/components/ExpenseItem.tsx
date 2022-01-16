// import classes from './TodoItem.module.css';
import { useContext } from "react";
import { ExpenseContext } from "../store/expense-context";
import "./ExpensesTable.css";
const ExpenseItem: React.FC<{
  euro: number;
  title: string;
  amount: string;
  onRemoveExpense: () => void;
}> = (props) => {
  const expenseCtx = useContext(ExpenseContext);
  return (
    <tr>
      <td>{props.title} </td>
      <td>{props.amount}</td>
      <td>
        {props.euro
          ? expenseCtx.roundNumber(parseFloat(props.amount) / props.euro)
          : "Please add a positive number of the rate"}
      </td>
      <td className="td-hover" onClick={props.onRemoveExpense}>
        Delete
      </td>
    </tr>
  );
};

export default ExpenseItem;
