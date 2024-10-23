import s from "./Footer.module.css";
import { CopyrightIcon, HeartIcon } from "../../icons/Icon";

const Footer = () => {
  return (
    <div className={s.footer_wrapper}>
      <ul className={s.footer_list}>
        <li className={s.footer_item}>
          <CopyrightIcon />
          &nbsp; 2024
        </li>
        <li className={s.footer_item}>All Rights Reserved</li>
        <li className={s.footer_item}>
          Developed with &nbsp;
          <HeartIcon />
        </li>
      </ul>
    </div>
  );
};

export default Footer;
