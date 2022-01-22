import NewExpense from "./NewExpense";
import ExpensesTable from "./ExpensesTable";
import { useContext } from "react";
import { ExpenseContext } from "../store/expense-context";
import "./MainPage.css";
import { observer } from "mobx-react-lite";

const MainPage: React.FC = () => {
  const expenseCtx = useContext(ExpenseContext);

  const rateChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    expenseCtx.convertToEuro();
    expenseCtx.setConversionRate(event.target.value);
  };

  return (
    <div className="container">
      <div className="header">
        <h1 className="title"> List of expenses </h1>
        <p className="euro-display">
          {`1EUR=${expenseCtx.conversionRate} PLN`}
        </p>
      </div>
      <NewExpense />
      <ExpensesTable />
      <h4>{`Sum:  ${expenseCtx.totalPLN} PLN   (${expenseCtx.totalEUR} EUR)`}</h4>
      <label htmlFor="rate">Conversion rate:</label>
      <input
        type="number"
        id="rate"
        onChange={rateChangeHandler}
        value={expenseCtx.conversionRate.toString()}
      />
    </div>
  );
};

export default observer(MainPage);
