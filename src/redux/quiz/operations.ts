import { createAsyncThunk } from "@reduxjs/toolkit";
import { Answer } from "../../helpers/customTypes";
import axios from "axios";

export const fetchTechQuestions = createAsyncThunk<Answer[]>(
  "quiz/fetchTechQuestions",
  async () => {
    const response = await axios.get("/qa-test/tech");
    return response.data;
  }
);

export const fetchTheoryQuestions = createAsyncThunk<Answer[]>(
  "quiz/fetchTheoryQuestions",
  async () => {
    const response = await axios.get("/qa-test/theory");
    return response.data;
  }
);
