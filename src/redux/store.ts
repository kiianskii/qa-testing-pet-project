import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authReducer } from "./auth/slice";
import { quizReducer } from "./quiz/slice";
import { loaderReducer } from "./loader/loaderSlice";

const authPersistConfig = {
  key: "auth",
  version: 1,
  storage,
};

const quizPersistConfig = {
  key: "quiz",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(authPersistConfig, authReducer);
const persistedQuizReducer = persistReducer(quizPersistConfig, quizReducer);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    quiz: persistedQuizReducer,
    loader: loaderReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
