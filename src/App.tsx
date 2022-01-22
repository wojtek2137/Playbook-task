import MainPage from "./components/MainPage";
import { observer } from "mobx-react-lite";

import "./App.css";
function App() {
  return <MainPage />;
}

export default observer(App);
