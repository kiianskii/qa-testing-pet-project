import React from "react";
import s from "./Footer.module.css";
import { Icon } from "../../icons/Icon";

const Footer = () => {
  return (
    <div className={s.footer_wrapper}>
      <ul className={s.footer_list}>
        <li className={s.footer_item}>
          <Icon size={18} id="copyright" className={s.copyright} /> &nbsp; 2024
        </li>
        <li className={s.footer_item}>All Rights Reserved</li>
        <li className={s.footer_item}>
          Developed with &nbsp;
          <Icon size={16} id="heart-fill" className={s.footer_heart} />
        </li>
      </ul>
    </div>
  );
};

export default Footer;
