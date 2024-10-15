import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import { Icon } from "../../icons/Icon";
import Logo from "../../icons/logo.png";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { logoutThunk } from "../../redux/auth/operations";

const Header = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <div className={s.header_wrapper}>
        <div className={s.nav_wrapper}>
          <img src={Logo} alt="Company logo" />
          <nav className={s.header_nav}>
            <NavLink className="link" to="/">
              Home
            </NavLink>
            <NavLink className="link" to="/useful-info">
              Materials
            </NavLink>
            <NavLink className="link" to="/contacts">
              Contacts
            </NavLink>
            <p>Andrew</p>
          </nav>
        </div>
        <div className={s.logout_wrapper}>
          <button
            type="button"
            className={s.logout_btn}
            onClick={() => {
              dispatch(logoutThunk());
            }}
          >
            <Icon size={16} id="sign-out" className={s.logout} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
