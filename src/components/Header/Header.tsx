import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = () => {
  return (
    <div className={s.header_wrapper}>
      <p>Pro test logo</p>
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
  );
};

export default Header;
