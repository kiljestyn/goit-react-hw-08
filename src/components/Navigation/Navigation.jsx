import clsx from "clsx";
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

const Navigation = () => {
  const activePage = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <>
      <nav className={css.homeLink}>
        <NavLink to="/" className={activePage}>
          PHONEBOOK
        </NavLink>
      </nav>
      <nav>
        <div className={css.authLinks}>
          <NavLink to="/login" className={activePage}>
            Log In
          </NavLink>
          {/* <p>Need an account?</p> */}
          <NavLink to="/register" className={activePage}>
            Sign up
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
