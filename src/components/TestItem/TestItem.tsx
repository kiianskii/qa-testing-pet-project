import React, { useState } from "react";
import s from "./TestItem.module.css";
import { useSelector } from "react-redux";
import {
  selectCurrentQuestionIndex,
  selectTotalQuestions,
} from "../../redux/quiz/selectors";

type TestProps = {
  question: string;
  answers: string[];
};

const TestItem: React.FC<TestProps> = ({ question, answers }) => {
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const currentIndex = useSelector(selectCurrentQuestionIndex);
  const totalQuestions = useSelector(selectTotalQuestions);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAnswer(event.target.value);
  };

  return (
    <div className={s.wrapper}>
      <p>
        Question {currentIndex + 1}/{totalQuestions}
      </p>
      <h3>{question}</h3>
      <div className={s.answers_wrapper}>
        {answers.map((answer, index) => (
          <div key={index}>
            <input
              type="radio"
              id={`option-${index}`}
              name="options"
              value={answer}
              checked={selectedAnswer === answer}
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
