import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store/state";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch } from "react-router-dom";
import {
  ProtectDashboard,
  LoginPage,
  ProtectLogin,
  Dashboard,
} from "./components/index";
console.log(process.env);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Switch>
          <ProtectLogin
            exact
            path={["", "/", "/login"]}
            Component={LoginPage}
          />
          <ProtectDashboard path="/dashboard" Component={Dashboard} />
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
