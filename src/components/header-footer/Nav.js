import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { userActions } from "../../store/action-creators/index";
import { userIsValid } from "../../utils/functions";
import { useHistory } from "react-router";

const Nav = (props) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { logout } = bindActionCreators(userActions, dispatch);
  const history = useHistory();

  const handleLogout = () => {
    logout();
    history.push("/login");
  };

  return (
    <nav className="navbar navbar-dark bg-dark justify-content-end">
      <ul className="nav">
        <li className="nav-item">
          <p className="nav-link active text-white" id="welcome">
            Welcome, {user.user ? user.user.data.firstName : "404"}!
          </p>
        </li>
        <li className="nav-item">
          <p
            className="nav-link text-white"
            onClick={handleLogout}
            id="logout-btn"
          >
            {userIsValid(user) ? "Login" : "Logout"}
          </p>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
