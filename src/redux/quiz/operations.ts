import { createAsyncThunk } from "@reduxjs/toolkit";
import { quizCredentials, resultData } from "../../helpers/customTypes";
import axios from "axios";

export const fetchTechQuestions = createAsyncThunk(
  "quiz/fetchTechQuestions",
  async (_, thunkApi) => {
    try {
      const response = await axios.get("/qa-test/tech");
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
      const response = await axios.get("/qa-test/theory");
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
  async (credentials: quizCredentials, thunkApi) => {
    try {
      const reqCredentials = { answers: credentials };
      const { data } = (await axios.post(
        "/qa-test/theory-results",
        reqCredentials
      )) as resultData;
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
  async (credentials: quizCredentials, thunkApi) => {
    try {
      const reqCredentials = { answers: credentials };
      const { data } = (await axios.post(
        "/qa-test/tech-results",
        reqCredentials
      )) as resultData;
      return data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.message) {
        return thunkApi.rejectWithValue(error.message);
      }
      return thunkApi.rejectWithValue("Unknown error occurred");
    }
  }
);
