import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { userActions } from "../store/action-creators/index";
import { userIsValid } from "../utils/functions";
import { useHistory } from "react-router-dom";

const LoginPage = (props) => {
  //redux store
  const { user } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { login } = bindActionCreators(userActions, dispatch);
  const history = useHistory();

  //local state
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  useEffect(() => {
    if (user.user) {
      if (userIsValid(user.user.data)) history.push("/dashboard");
    }
  }, [user, history]);

  return (
    <div className="login-container">
      <div className="image-section"></div>
      <div className="login-section">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="text"
              minLength="1"
              className="form-control"
              id="userNameInput"
              aria-describedby="emailHelp"
              onChange={(e) => setUsername(e.target.value)}
            ></input>
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              minLength="3"
              className="form-control"
              id="password"
              autoComplete="on"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <div
            className={`alert alert-danger ${
              user.error === "" || user.error === null ? "hidden" : ""
            }`}
            role="alert"
          >
            Invalid username or password.
          </div>
          <button
            className="btn btn-primary bg-color1 no-border"
            onClick={(e) => handleSubmit(e)}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
