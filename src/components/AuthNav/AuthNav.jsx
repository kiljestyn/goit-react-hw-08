import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import { logout } from "../../redux/auth/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectUserData } from "../../redux/auth/selectors";

const AuthNav = () => {
  const user = useSelector(selectUserData);
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <NavLink className={css.navlink} to="/contacts">
        {/* <h1>
          <span style={{ color: "#9c9ef9aa" }}>P</span>h
          <span style={{ color: "#9cf9c0aa" }}>o</span>n
          <span style={{ color: "#61dafbaa" }}>e</span>b
          <span style={{ color: "#80945baa" }}>♾️</span>k
        </h1> */}
      </NavLink>
      <div>
        <span className={css.text}>Hello {user.name}</span>
        <button className={css.logOutBtn} onClick={onLogout} type="button">
          Say, bye
        </button>
      </div>
    </div>
  );
};

export default AuthNav;
