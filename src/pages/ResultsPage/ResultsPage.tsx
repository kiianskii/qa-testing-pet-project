import React from "react";
import { useSelector } from "react-redux";
import {
  selectQuizStatus,
  selectResults,
  selectTotalQuestions,
} from "../../redux/quiz/selectors";
import CustomPieChart from "../../components/ResultChart/ResultChart";
import s from "./ResultsPage.module.css";
import { useNavigate } from "react-router-dom";
import cat from "../../img/cat.png";

const ResultsPage = () => {
  const results = useSelector(selectResults);
  const navigate = useNavigate();
  const status = useSelector(selectQuizStatus);
  const totalQuestions = useSelector(selectTotalQuestions);

  let resNum: number = 0;
  let incorrectNum: number = 100;
  let correctNum: number = 0;

  if (results) {
    resNum = parseInt(results.result) || 0;
    incorrectNum = 100 - resNum;
    correctNum = (parseInt(results.result) / 100) * totalQuestions || 0;
  }

  const data = [
    { name: "Correct", value: resNum },
    { name: "Incorrect", value: incorrectNum },
  ];

  return (
    <section className={s.section}>
      <div className={s.title_wrapper}>
        <h2>Results</h2>
        <p>[ Testing {status === "theory" ? "theory_" : "tech_"} ]</p>
      </div>
      <div>
        <CustomPieChart data={data} />
      </div>
      <div className={s.answ_wrapper}>
        <p>
          Correct answers - <span>{Math.round(correctNum)}</span>
        </p>
        <p>
          Total questions - <span>{totalQuestions}</span>
        </p>
      </div>

      <img src={cat} alt="Cat picture" className={s.cat} />

      <ul className={s.desc_list}>
        <li className={s.main_message}>{results?.mainMessage}</li>
        <li className={s.secondary_message}>{results?.secondaryMessage}</li>
      </ul>

      <button
        className={s.try_btn}
        onClick={() => {
          navigate("/");
        }}
      >
        Try again
      </button>
    </section>
  );
};

export default ResultsPage;
