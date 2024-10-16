import { createSlice } from "@reduxjs/toolkit";

import { QuizState } from "../../helpers/customTypes";
import { fetchTechQuestions, fetchTheoryQuestions } from "./operations";
import { logoutThunk } from "../auth/operations";

const initialState: QuizState = {
  questions: [],
  currentQuestionIndex: 0,
  status: "",
  error: null,
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
  },
  extraReducers: (builder) => {
    builder

      .addCase(fetchTechQuestions.fulfilled, (state, action) => {
        state.status = "tech";
        state.questions = action.payload;
      })
      .addCase(fetchTechQuestions.rejected, (state, action) => {
        state.error = action.error.message || null;
      })
      .addCase(fetchTheoryQuestions.fulfilled, (state, action) => {
        state.status = "theory";
        state.questions = action.payload;
      })
      .addCase(fetchTheoryQuestions.rejected, (state, action) => {
        state.error = action.error.message || null;
      })
      .addCase(logoutThunk.fulfilled, () => {
        return initialState;
      });
  },
});

export const { nextQuestion, previousQuestion, resetQuiz } = quizSlice.actions;

export const quizReducer = quizSlice.reducer;
