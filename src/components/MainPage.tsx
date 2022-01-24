import NewExpense from "./NewExpense";
import ExpensesTable from "./ExpensesTable";
import store from "../store/store";
import { observer } from "mobx-react-lite";
import styled from "@emotion/styled";

//styling
const ContainerWrapper = styled.section`
  margin: auto;
  padding: 10%;
  @media (max-width: 992px) {
    padding: 0;
  }
`;

const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  h1 {
    text-align: left;
    width: 100%;
    font-weight: 600;
    font-size: 2.5em;
  }
  p {
    font-weight: 400;
    text-align: right;
    font-size: 1.3em;
    align-items: center;
    margin-top: 40px;
    white-space: nowrap;
  }
  @media (max-width: 992px) {
    h1{
    font-size:1.8em;
  }
  p {
    
    font-size: 1em;
    margin-right: 2%;
  }
  
`;

const H4 = styled.h4`
  font-size: 1.4rem;
  font-weight: 500;
`;
const ConversionWrapper = styled.div`
  label {
    display: inline-block;
    font-weight: 600;
    font-size: 1.2rem;
    width: 150px;
  }
  input {
    font: inherit;
    padding: 0.3rem;
    border: 1px solid rgb(0, 0, 0);
    width: 10rem;
    max-width: 100%;
  }
`;

//// Component
const MainPage: React.FC = () => {
  const rateChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    store.convertToEuro();
    store.setConversionRate(event.target.value);
  };

  return (
    <ContainerWrapper>
      <HeaderWrapper>
        <h1>List of expenses</h1>
        <p>{`1EUR=${store.conversionRate} PLN`}</p>
      </HeaderWrapper>
      <NewExpense />
      <ExpensesTable />
      <H4>{`Sum:  ${store.totalPLN} PLN   (${store.totalEUR} EUR)`}</H4>
      <ConversionWrapper>
        <label htmlFor="rate">Conversion rate: </label>
        <input
          type="number"
          id="rate"
          min="0.001"
          step="0.001"
          onChange={rateChangeHandler}
          value={store.conversionRate.toString()}
        />
      </ConversionWrapper>
    </ContainerWrapper>
  );
};

export default observer(MainPage);
