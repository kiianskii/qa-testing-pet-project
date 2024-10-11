import React from "react";
import s from "./TestPage.module.css";
import { Icon } from "../../icons/Icon";
import TestItem from "../../components/TestItem/TestItem";

const testQuestion = {
  question:
    "Item testing (or side testing) allows you to test individual work of source code units",

  answers: [
    "Currency testing",
    "Testing the web application",
    "Functional testing",
    "Interface testing",
    "Gamma testing",
    "I don't know",
  ],
};

const TestPage = () => {
  return (
    <section className={s.test_page}>
      <div className={s.title_wrapper}>
        <h2>
          [ Testing <br /> theory_ ]
        </h2>
        <button className={s.finish_btn}>Finish test</button>
      </div>
      <div>
        <TestItem
          question={testQuestion.question}
          answers={testQuestion.answers}
        />
      </div>
      <div className={s.btn_wrapper}>
        <button type="button" className={s.nav_btn}>
          <Icon size={24} id="arrow" className={s.arrow + " " + s.arrow_left} />
          Previous question
        </button>
        <button type="button" className={s.nav_btn}>
          Next question
          <Icon size={24} id="arrow" className={s.arrow} />
        </button>
      </div>
    </section>
  );
};

export default TestPage;
