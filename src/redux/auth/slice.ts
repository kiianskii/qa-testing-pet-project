import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, logoutThunk, refreshThunk } from "./operations";

interface User {
  email: string;
  id: string;
}

interface AuthState {
  accessToken: string;
  refreshToken: string;
  sid: string;
  userData: User;
  isLoggedIn: boolean;
  isRefreshing: boolean;
}

const initialState: AuthState = {
  userData: {
    email: "",
    id: "",
  },
  accessToken: "",
  refreshToken: "",
  sid: "",
  isLoggedIn: false,
  isRefreshing: false,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  selectors: {
    selectAccessToken: (state: AuthState) => state.accessToken,
    selectRefreshToken: (state: AuthState) => state.accessToken,
    selectSid: (state: AuthState) => state.accessToken,
    selectUser: (state: AuthState) => state.userData,
    selectIsLoggedIn: (state: AuthState) => state.isLoggedIn,
    selectIsRefreshing: (state: AuthState) => state.isRefreshing,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        if (payload) {
          state.userData = payload.userData;
          state.accessToken = payload.accessToken;
          state.refreshToken = payload.refreshToken;
          state.sid = payload.sid;
          state.isLoggedIn = true;
        }
      })
      .addCase(logoutThunk.fulfilled, () => {
        return initialState;
      })
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        state.accessToken = payload.newAccessToken;
        state.refreshToken = payload.newRefreshToken;
        state.sid = payload.newSid;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshThunk.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshThunk.rejected, (state) => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = slice.reducer;
export const {
  selectAccessToken,
  selectRefreshToken,
  selectSid,
  selectIsLoggedIn,
  selectUser,
  selectIsRefreshing,
} = slice.selectors;
