import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import { Icon } from "../../icons/Icon";
import Logo from "../../icons/logo.png";

const Header = () => {
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
          <Icon size={16} id="sign-out" className={s.logout} />
        </div>
      </div>
    </>
  );
};

export default Header;
