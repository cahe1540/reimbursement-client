import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { userIsValid } from "../../utils/functions";

const ProtectLogin = ({ Component, ...props }) => {
  const state = useSelector((state) => state);
  let isAuthenticated = false;
  if (state.user) isAuthenticated = userIsValid(state.user.data);

  return (
    <Route
      render={(props) =>
        !isAuthenticated ? <Component /> : <Redirect to="/home" />
      }
    />
  );
};

export default ProtectLogin;
