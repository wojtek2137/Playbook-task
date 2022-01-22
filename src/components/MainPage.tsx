import NewExpense from "./NewExpense";
import ExpensesTable from "./ExpensesTable";
import store from "../store/store";
import "./MainPage.css";
import { observer } from "mobx-react-lite";

const MainPage: React.FC = () => {
  const rateChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    store.convertToEuro();
    store.setConversionRate(event.target.value);
  };

  return (
    <div className="container">
      <div className="header">
        <h1 className="title"> List of expenses </h1>
        <p className="euro-display">{`1EUR=${store.conversionRate} PLN`}</p>
      </div>
      <NewExpense />
      <ExpensesTable />
      <h4>{`Sum:  ${store.totalPLN} PLN   (${store.totalEUR} EUR)`}</h4>
      <label htmlFor="rate">Conversion rate:</label>
      <input
        type="number"
        id="rate"
        onChange={rateChangeHandler}
        value={store.conversionRate.toString()}
      />
    </div>
  );
};

export default observer(MainPage);
