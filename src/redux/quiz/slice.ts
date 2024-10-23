import { createSlice } from "@reduxjs/toolkit";

import { QuizState } from "../../helpers/customTypes";
import {
  fetchTechQuestions,
  fetchTechResults,
  fetchTheoryQuestions,
  fetchTheoryResults,
} from "./operations";
import { logoutThunk } from "../auth/operations";

const initialState: QuizState = {
  questions: [],
  currentQuestionIndex: 0,
  status: "",
  error: null,
  answers: [],
  results: null,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    nextQuestion(state) {
      if (state.currentQuestionIndex < state.questions.length - 1) {
        state.currentQuestionIndex += 1;
      }
    },
    previousQuestion(state) {
      if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex -= 1;
      }
    },
    resetQuiz(state) {
      state.currentQuestionIndex = 0;
    },
    saveAnswer(state, action) {
      const { questionId, answer } = action.payload;

      const existingAnswerIndex = state.answers.findIndex(
        (item) => item.questionId === questionId
      );

      if (existingAnswerIndex !== -1) {
        state.answers[existingAnswerIndex].answer = answer;
      } else {
        state.answers.push({ questionId, answer });
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTechQuestions.fulfilled, (state, action) => {
        state.answers = [];
        state.currentQuestionIndex = 0;
        state.results = null;
        state.status = "tech";
        state.questions = action.payload;
      })
      .addCase(fetchTechQuestions.rejected, (state, action) => {
        state.error = action.error.message || null;
      })
      .addCase(fetchTheoryQuestions.fulfilled, (state, action) => {
        state.answers = [];
        state.currentQuestionIndex = 0;
        state.results = null;
        state.status = "theory";
        state.questions = action.payload;
      })
      .addCase(fetchTheoryQuestions.rejected, (state, action) => {
        state.error = action.error.message || null;
      })
      .addCase(fetchTechResults.fulfilled, (state, action) => {
        state.results = action.payload;
      })
      .addCase(fetchTheoryResults.fulfilled, (state, action) => {
        state.results = action.payload;
      })
      .addCase(logoutThunk.fulfilled, () => {
        return initialState;
      });
  },
});

export const { nextQuestion, previousQuestion, resetQuiz, saveAnswer } =
  quizSlice.actions;

export const quizReducer = quizSlice.reducer;
