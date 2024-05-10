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
    <div className={css.container}>
      <div>
        <NavLink className={css.navlink} to="/contacts"></NavLink>
      </div>
      <div className={css.authNavCont}>
        <span className={css.text}>Hello, {user.name}</span>
        <button className={css.logOutBtn} onClick={onLogout} type="button">
          Say, bye
        </button>
      </div>
    </div>
  );
};

export default AuthNav;
