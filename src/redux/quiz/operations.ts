import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  AnswersResponse,
  QuizCredentials,
  ResultData,
} from "../../helpers/customTypes";
import axios from "axios";

export const fetchTechQuestions = createAsyncThunk(
  "quiz/fetchTechQuestions",
  async (_, thunkApi) => {
    try {
      const response = await axios.get<AnswersResponse>("/qa-test/tech");
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.message) {
        return thunkApi.rejectWithValue(error.message);
      }
      return thunkApi.rejectWithValue("Unknown error occurred");
    }
  }
);

export const fetchTheoryQuestions = createAsyncThunk(
  "quiz/fetchTheoryQuestions",
  async (_, thunkApi) => {
    try {
      const response = await axios.get<AnswersResponse>("/qa-test/theory");
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.message) {
        return thunkApi.rejectWithValue(error.message);
      }
      return thunkApi.rejectWithValue("Unknown error occurred");
    }
  }
);

export const fetchTheoryResults = createAsyncThunk(
  "quiz/fetchTheoryResults",
  async (credentials: QuizCredentials, thunkApi) => {
    try {
      const reqCredentials = { answers: credentials };
      const { data } = await axios.post<ResultData>(
        "/qa-test/theory-results",
        reqCredentials
      );
      return data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.message) {
        return thunkApi.rejectWithValue(error.message);
      }
      return thunkApi.rejectWithValue("Unknown error occurred");
    }
  }
);

export const fetchTechResults = createAsyncThunk(
  "quiz/fetchTechResults",
  async (credentials: QuizCredentials, thunkApi) => {
    try {
      const reqCredentials = { answers: credentials };
      const { data } = await axios.post<ResultData>(
        "/qa-test/tech-results",
        reqCredentials
      );
      return data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.message) {
        return thunkApi.rejectWithValue(error.message);
      }
      return thunkApi.rejectWithValue("Unknown error occurred");
    }
  }
);
