import React from "react";
import ReactDOM from "react-dom/client";
// import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "../../React-Basics/src/Redux/store";
// ReactDOM.render(<App/>,document.getElementById("root"));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
