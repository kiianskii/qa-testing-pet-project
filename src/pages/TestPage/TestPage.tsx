import React from "react";
import s from "./TestPage.module.css";
import { Icon } from "../../icons/Icon";
import TestItem from "../../components/TestItem/TestItem";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAnswers,
  selectCurrentQuestion,
  selectCurrentQuestionIndex,
  selectQuizStatus,
  selectTotalQuestions,
} from "../../redux/quiz/selectors";
import { AppDispatch } from "../../redux/store";
import { nextQuestion, previousQuestion } from "../../redux/quiz/slice";
import { useNavigate } from "react-router-dom";
import {
  fetchTechResults,
  fetchTheoryResults,
} from "../../redux/quiz/operations";

const TestPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const question = useSelector(selectCurrentQuestion);
  const currentIndex = useSelector(selectCurrentQuestionIndex);
  const totalQuestions = useSelector(selectTotalQuestions);
  const status = useSelector(selectQuizStatus);
  const answers = useSelector(selectAnswers);

  const handleNext = () => {
    dispatch(nextQuestion());
  };

  const handlePrevious = () => {
    dispatch(previousQuestion());
  };

  const handleFinish = () => {
    if (status === "tech") {
      dispatch(fetchTechResults(answers));
    } else if (status === "theory") {
      dispatch(fetchTheoryResults(answers));
    }
    navigate("/results");
  };

  return (
    <section className={s.test_page}>
      <div className={s.title_wrapper}>
        <h2>
          [ Testing <br /> {status === "theory" ? "theory_" : "tech_"} ]
        </h2>
        <button
          className={s.finish_btn}
          onClick={handleFinish}
          disabled={totalQuestions !== answers.length}
        >
          Finish test
        </button>
      </div>
      <div>
        {question && (
          <TestItem question={question.question} answers={question.answers} />
        )}
      </div>
      <div className={s.btn_wrapper}>
        <button
          type="button"
          className={s.nav_btn}
          onClick={handlePrevious}
          disabled={currentIndex === 0}
        >
          <Icon size={24} id="arrow" className={s.arrow + " " + s.arrow_left} />
          Previous question
        </button>
        <button
          type="button"
          className={s.nav_btn}
          onClick={handleNext}
          disabled={currentIndex >= totalQuestions - 1}
        >
          Next question
          <Icon size={24} id="arrow" className={s.arrow} />
        </button>
      </div>
    </section>
  );
};

export default TestPage;
