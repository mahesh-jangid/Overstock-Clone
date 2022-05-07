import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import { AuthContextProvider } from "./context/Authcontext";
import { BrowserRouter } from "react-router-dom";
import { Provider as ReduxContextProvider } from "react-redux";
import { store } from "./Redux/store";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ReduxContextProvider store={store}>
        <App />
      </ReduxContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
