import { QuizState } from "../../helpers/customTypes";

export const selectCurrentQuestion = (state: { quiz: QuizState }) =>
  state.quiz.questions[state.quiz.currentQuestionIndex];

export const selectCurrentQuestionIndex = (state: { quiz: QuizState }) =>
  state.quiz.currentQuestionIndex;

export const selectTotalQuestions = (state: { quiz: QuizState }) =>
  state.quiz.questions.length;

export const selectQuizStatus = (state: { quiz: QuizState }) =>
  state.quiz.status;

export const selectQuizError = (state: { quiz: QuizState }) => state.quiz.error;

export const selectAnswers = (state: { quiz: QuizState }) => state.quiz.answers;

export const selectResults = (state: { quiz: QuizState }) => state.quiz.results;
