import React from "react";

import s from "./MenuButton.module.css";
import { CloseIcon, MenuIcon } from "../../icons/Icon";

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
          <MenuIcon />
        </button>
      ) : (
        <button onClick={closeModal} className={s.menu_btn}>
          <CloseIcon />
        </button>
      )}
    </div>
  );
};

export default MenuButton;
