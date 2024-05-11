import { NavLink } from "react-router-dom";
import css from "./UserMenu.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUserData } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

const UserMenu = () => {
  const user = useSelector(selectUserData);

  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const onCloseModal = () => setIsModalOpen(false);
  const onOpenModal = () => setIsModalOpen(true);

  return (
    <div className={css.container}>
      {isModalOpen && (
        <div className={css.overlay}>
          <div className={css.modalContainer}>
            <div className={css.modalContent}>
              <h3 className={css.modalTitle}>Are you sure?</h3>
              <div className={css.modalButtons}>
                <button
                  className={`${css.modalButton} ${css.yes}`}
                  onClick={onLogout}
                  type="button"
                >
                  YES
                </button>
                <button
                  className={`${css.modalButton} ${css.no}`}
                  onClick={onCloseModal}
                  type="button"
                >
                  NO
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div>
        <NavLink className={css.navlink} to="/contacts"></NavLink>
      </div>
      <div className={css.authNavCont}>
        <span className={css.text}>Hello, {user.name}</span>
        <button className={css.logOutBtn} onClick={onOpenModal} type="button">
          Say, bye
        </button>
      </div>
    </div>
  );
};

export default UserMenu;
