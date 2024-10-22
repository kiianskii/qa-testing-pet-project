import React from "react";
import s from "./TestItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAnswers,
  selectCurrentQuestion,
  selectCurrentQuestionIndex,
  selectTotalQuestions,
} from "../../redux/quiz/selectors";
import { AppDispatch } from "../../redux/store";
import { saveAnswer } from "../../redux/quiz/slice";

type TestProps = {
  question: string;
  answers: string[];
};

const TestItem: React.FC<TestProps> = ({ question, answers }) => {
  const dispatch = useDispatch<AppDispatch>();
  const currentQuestion = useSelector(selectCurrentQuestion);
  const currentIndex = useSelector(selectCurrentQuestionIndex);
  const totalQuestions = useSelector(selectTotalQuestions);
  const allAnswers = useSelector(selectAnswers);
  const currentAnswer = allAnswers.find(
    (item) => item.questionId === currentQuestion.questionId
  )?.answer;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      saveAnswer({
        questionId: currentQuestion.questionId,
        answer: event.target.value,
      })
    );
  };

  return (
    <div className={s.wrapper}>
      <p className={s.question_index}>
        Question {currentIndex + 1}/{totalQuestions}
      </p>
      <h3 className={s.question_title}>{question}</h3>
      <div className={s.answers_wrapper}>
        {answers.map((answer, index) => (
          <div key={index}>
            <input
              type="radio"
              id={`option-${index}`}
              name="options"
              value={answer}
              checked={currentAnswer === answer}
              onChange={handleChange}
            />
            <label className={s.label} htmlFor={`option-${index}`}>
              {answer}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestItem;
