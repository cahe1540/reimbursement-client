import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { userIsValid } from "../../utils/functions";

const ProtectDashboard = ({ Component, ...props }) => {
  const state = useSelector((state) => state);
  let isAuthenticated = false;
  if (state.user) isAuthenticated = userIsValid(state.user.data);

  return (
    <Route
      render={(props) =>
        !isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default ProtectDashboard;
