import clsx from "clsx";
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

const Navigation = () => {
  const activePage = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <div>
      <nav>
        <NavLink to="/" className={activePage}>
          Home
        </NavLink>
        {/* <h1>Phonebook</h1> */}
        <NavLink to="/login" className={activePage}>
          Log In
        </NavLink>
        {/* <p>Need an account?</p> */}
        <NavLink to="/register" className={activePage}>
          Sign up
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
