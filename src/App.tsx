import MainPage from "./components/MainPage";
import ExpenseContextProvider from "./store/expense-context";
import "./App.css";
function App() {
  return (
    <ExpenseContextProvider>
      <MainPage />
    </ExpenseContextProvider>
  );
}

export default App;
