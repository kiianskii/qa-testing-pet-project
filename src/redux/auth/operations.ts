import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  Data,
  LogCredentials,
  RefreshCredentials,
  RefreshRes,
  RegCredentials,
  User,
} from "../../helpers/customTypes";

axios.defaults.baseURL = "https://protest-backend.goit.global";

export const setToken = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const clearToken = () => {
  axios.defaults.headers.common.Authorization = ``;
};

export const registerThunk = createAsyncThunk(
  "auth/register",
  async (credentials: RegCredentials, thunkApi) => {
    try {
      const { data } = await axios.post<Data>("auth/register", credentials);
      return data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.message) {
        return thunkApi.rejectWithValue(error.message);
      }
      return thunkApi.rejectWithValue("Unknown error occurred");
    }
  }
);

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (credentials: LogCredentials, thunkApi) => {
    try {
      const { data } = await axios.post<User>("auth/login", credentials);
      setToken(data.accessToken);
      return data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.message) {
        return thunkApi.rejectWithValue(error.message);
      }
      return thunkApi.rejectWithValue("Unknown error occurred");
    }
  }
);

export const logoutThunk = createAsyncThunk(
  "auth/logout",
  async (_, thunkApi) => {
    try {
      await axios.post("auth/logout");
      clearToken();
    } catch (error) {
      if (axios.isAxiosError(error) && error.message) {
        return thunkApi.rejectWithValue(error.message);
      }
      return thunkApi.rejectWithValue("Unknown error occurred");
    }
  }
);

export const refreshThunk = createAsyncThunk(
  "auth/refresh",
  async (credentials: RefreshCredentials, thunkApi) => {
    try {
      const { data } = await axios.post<RefreshRes>(
        "auth/refresh",
        { sid: credentials.sid },
        {
          headers: {
            Authorization: `Bearer ${credentials.refreshToken}`,
          },
        }
      );
      setToken(data.newAccessToken);
      return data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.message) {
        return thunkApi.rejectWithValue(error.message);
      }
      return thunkApi.rejectWithValue("Unknown error occurred");
    }
  }
);
