import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import s from "./ResultsPage.module.css";
import cat from "../../img/cat.png";

import {
  selectQuizStatus,
  selectResults,
  selectTotalQuestions,
} from "../../redux/quiz/selectors";
import CustomPieChart from "../../components/ResultChart/ResultChart";
import { Status } from "../../helpers/customTypes";

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
        <h2 className={s.title}>Results</h2>
        <p className={s.title_desc}>
          [ Testing {status === Status.THEORY ? Status.THEORY : Status.TECH} ]
        </p>
      </div>
      <div>
        <CustomPieChart data={data} />
      </div>
      <div className={s.answ_wrapper}>
        <p className={s.correct_answ}>
          Correct answers - <span>{Math.round(correctNum)}</span>
        </p>
        <p className={s.correct_answ}>
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
