import NewExpense from "./NewExpense";
import ExpensesTable from "./ExpensesTable";
import { useContext } from "react";
import { ExpenseContext } from "../store/expense-context";
import "./MainPage.css";
const MainPage: React.FC = () => {
  const expenseCtx = useContext(ExpenseContext);
  console.log("expenseCtx", expenseCtx);

  const totalCurrency = {
    totalEUR: expenseCtx.euro
      ? `${expenseCtx.roundNumber(expenseCtx.total / expenseCtx.euro)} EUR`
      : "Please add a positive number of the rate",
    totalPLN: `${expenseCtx.roundNumber(expenseCtx.total)} PLN`,
  };

  console.log(
    `totalEuro ${totalCurrency.totalEUR} totalPLN ${totalCurrency.totalPLN}`
  );

  const rateChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    expenseCtx.addEuroRate(event.target.value);
  };

  return (
    <div className="container">
      <div className="header">
        <h1 className="title"> List of expenses </h1>
        <p className="euro-display">
          {expenseCtx.euro ? `1EUR=${expenseCtx.euro} PLN` : null}
        </p>
      </div>
      <NewExpense />
      <ExpensesTable />
      <h4>{`Sum:  ${totalCurrency.totalPLN}   (${totalCurrency.totalEUR})`}</h4>
      <label htmlFor="rate">Conversion rate:</label>
      <input
        type="number"
        id="rate"
        min="0.001"
        step="0.001"
        onChange={rateChangeHandler}
        value={expenseCtx.euro.toString()}
      />
    </div>
  );
};

export default MainPage;
