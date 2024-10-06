import logo from "./logo.svg";
import "./App.css";
import Body from "./Components/Body";
import { Provider } from "react-redux";
import appStore from "./store/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <div className="">
        <Body />
      </div>
    </Provider>
  );
}

export default App;
