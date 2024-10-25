import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CheckmarkIcon } from "react-hot-toast";

import s from "./BurgerMenu.module.css";

import { selectIsLoggedIn } from "../../redux/auth/slice";
import { NavLink } from "react-router-dom";

import { logoutThunk } from "../../redux/auth/operations";
import { AppDispatch } from "../../redux/store";

interface ModalProps {
  closeModal: () => void;
}

const BurgerMenu: React.FC<ModalProps> = ({ closeModal }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch<AppDispatch>();

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    },
    [closeModal]
  );
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal, handleKeyDown]);

  return (
    <div className={s.wrapper}>
      <nav className={s.header_nav}>
        {isLoggedIn && (
          <>
            <div className={s.link_wrapper}>
              <NavLink className="link" to="/" onClick={closeModal}>
                Home
              </NavLink>
            </div>
            <div className={s.link_wrapper}>
              <NavLink className="link" to="/useful-info" onClick={closeModal}>
                Materials
              </NavLink>
            </div>
          </>
        )}
        <div className={s.link_wrapper}>
          <NavLink className="link" to="/contacts" onClick={closeModal}>
            Contacts
          </NavLink>
        </div>
        {!isLoggedIn && (
          <div className={s.link_wrapper}>
            <NavLink className="link" to="/auth" onClick={closeModal}>
              Sign in
            </NavLink>
          </div>
        )}
        {isLoggedIn && (
          <div className={s.link_wrapper}>
            <button
              type="button"
              className={s.logout_btn}
              onClick={() => {
                dispatch(logoutThunk());
                closeModal();
              }}
            >
              <CheckmarkIcon />
            </button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default BurgerMenu;
