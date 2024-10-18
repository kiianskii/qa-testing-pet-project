import { createSlice, isAnyOf } from "@reduxjs/toolkit";

import { loginThunk, registerThunk } from "../auth/operations";
import {
  fetchTechQuestions,
  fetchTechResults,
  fetchTheoryQuestions,
  fetchTheoryResults,
} from "../quiz/operations";

interface LoaderState {
  isLoading: boolean;
}

const initialState: LoaderState = {
  isLoading: false,
};

const slice = createSlice({
  name: "loader",
  initialState,
  reducers: {},
  selectors: {
    selectisLoading: (state: LoaderState) => state.isLoading,
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        isAnyOf(
          fetchTechQuestions.fulfilled,
          fetchTechResults.fulfilled,
          fetchTheoryQuestions.fulfilled,
          fetchTheoryResults.fulfilled,
          loginThunk.fulfilled,
          registerThunk.fulfilled
        ),
        (state) => {
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchTechQuestions.pending,
          fetchTechResults.pending,
          fetchTheoryQuestions.pending,
          fetchTheoryResults.pending,
          loginThunk.pending,
          registerThunk.pending
        ),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchTechQuestions.rejected,
          fetchTechResults.rejected,
          fetchTheoryQuestions.rejected,
          fetchTheoryResults.rejected,
          loginThunk.rejected,
          registerThunk.rejected
        ),
        (state) => {
          state.isLoading = false;
        }
      );
  },
});

export const loaderReducer = slice.reducer;
export const { selectisLoading } = slice.selectors;
