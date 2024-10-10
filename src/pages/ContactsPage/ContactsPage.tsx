import React from "react";
import s from "./ContactsPage.module.css";
import ContactItem from "../../components/ContactItem/ContactItem";
import memberPhoto from "../../img/member.png";

const member = {
  imgSrc: memberPhoto,
  width: 288,
  height: 244,
  name: "NAME",
  position: "Front-End Developer",
  description:
    "Lorem Ipsum has been the standard 'fish' for Latin texts since the early 16th century.",
};

const ContactsPage = () => {
  const contacts: (typeof member)[] = Array(8).fill(member);
  return (
    <div>
      <h2 className={s.title}>Our team</h2>
      <ul className={s.contacts_list}>
        {contacts.map((item, index) => {
          return (
            <ContactItem
              key={index}
              imgSrc={item.imgSrc}
              width={item.width}
              height={item.height}
              name={item.name}
              position={item.position}
              description={item.description}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ContactsPage;
