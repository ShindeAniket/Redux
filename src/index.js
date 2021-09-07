// import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./store/index";
import { Provider } from "react-redux";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
