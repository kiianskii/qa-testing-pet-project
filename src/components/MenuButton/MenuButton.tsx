import React from "react";
import { Icon } from "../../icons/Icon";
import s from "./MenuButton.module.css";

interface MenuProps {
  isOpen: boolean;
  closeModal: () => void;
  openModal: () => void;
}

const MenuButton: React.FC<MenuProps> = ({ openModal, isOpen, closeModal }) => {
  return (
    <div>
      {!isOpen ? (
        <button type="button" className={s.menu_btn} onClick={openModal}>
          <Icon id="menu" size={20} className="menu_icon" />
        </button>
      ) : (
        <button onClick={closeModal} className={s.menu_btn}>
          <Icon size={26} id={"close"} className={s.icon_close} />
        </button>
      )}
    </div>
  );
};

export default MenuButton;
