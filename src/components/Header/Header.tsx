import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import Logo from "../../icons/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { logoutThunk } from "../../redux/auth/operations";
import { selectIsLoggedIn } from "../../redux/auth/slice";
import { useMediaQuery } from "react-responsive";
import MenuButton from "../MenuButton/MenuButton";
import { CheckmarkIcon } from "../../icons/Icon";

interface HeaderProps {
  isOpen: boolean;
  closeModal: () => void;
  openModal: () => void;
}
const Header: React.FC<HeaderProps> = ({ isOpen, closeModal, openModal }) => {
  const dispatch = useDispatch<AppDispatch>();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <>
      <div className={s.header_wrapper}>
        <div className={s.nav_wrapper}>
          <img src={Logo} alt="Company logo" />
          {isMobile ? (
            <MenuButton
              isOpen={isOpen}
              closeModal={closeModal}
              openModal={openModal}
            />
          ) : (
            <nav className={s.header_nav}>
              {isLoggedIn && (
                <>
                  <NavLink className="link" to="/">
                    Home
                  </NavLink>
                  <NavLink className="link" to="/useful-info">
                    Materials
                  </NavLink>
                </>
              )}
              <NavLink className="link" to="/contacts">
                Contacts
              </NavLink>
              {!isLoggedIn && (
                <NavLink className="link" to="/auth">
                  Sign in
                </NavLink>
              )}
              {isLoggedIn && (
                <div className={s.logout_wrapper}>
                  <button
                    type="button"
                    className={s.logout_btn}
                    onClick={() => {
                      dispatch(logoutThunk());
                    }}
                  >
                    <CheckmarkIcon />
                  </button>
                </div>
              )}
            </nav>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
