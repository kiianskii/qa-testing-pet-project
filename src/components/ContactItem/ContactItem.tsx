import React from "react";

import s from "./ContactItem.module.css";

type ContactProp = {
  imgSrc: string;
  width: number;
  height: number;
  name: string;
  position: string;
  description: string;
};

const ContactItem: React.FC<ContactProp> = ({
  imgSrc,
  name,
  position,
  description,
}) => {
  return (
    <li className={s.wrapper}>
      <div className={s.img_wrapper}>
        <img className={s.img} src={imgSrc} alt={name} />
      </div>
      <div className={s.info_wrapper}>
        <h3 className={s.name}>{name}</h3>
        <p className={s.position}>{position}</p>
        <p className={s.description}>{description}</p>
      </div>
    </li>
  );
};

export default ContactItem;
