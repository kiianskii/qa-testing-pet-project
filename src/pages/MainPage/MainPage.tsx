import React from "react";
import s from "./MainPage.module.css";
import { Icon } from "../../icons/Icon";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <section className={s.container}>
      <h2 className={s.title}>
        “Regression testing. What is it? <br /> If the system compiles, that's
        good, if it boots, that's great!”
      </h2>

      <div className={s.wrapper}>
        <h3>Linus Torvalds</h3>
        <p>Linux kernel creator, hacker, 1969</p>
      </div>

      <div className={s.btn_wrapper}>
        <button
          className={s.btn}
          type="button"
          onClick={() => {
            navigate("/test");
          }}
        >
          <span>QA technical training</span>
          <Icon size={24} id="arrow" className={s.arrow} />
        </button>
        <button
          className={s.btn + " " + s.theory}
          type="button"
          onClick={() => {
            navigate("/test");
          }}
        >
          <span>
            Testing <br /> theory
          </span>
          <Icon size={24} id="arrow" className={s.arrow} />
        </button>
      </div>
    </section>
  );
};

export default MainPage;
