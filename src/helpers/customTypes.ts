import { RootState } from "../redux/store";

export interface User {
  accessToken: string;
  refreshToken: string;
  sid: string;
  userData: {
    email: string;
    id: string;
  };
}

export interface AsyncThunkConfig {
  state: RootState;
  rejectValue: string;
}

export interface Data {
  data: {
    email: string;
    id: string;
  };
}

export interface RegCredentials {
  email: string;
  password: string;
}

export interface LogCredentials {
  email: string;
  password: string;
}

export interface RefreshRes {
  newAccessToken: string;
  newRefreshToken: string;
  newSid: string;
}

export interface RefreshCredentials {
  sid: string;
  refreshToken: string;
}

export interface Answer {
  question: string;
  questionId: number;
  answers: string[];
}

export type AnswersResponse = Answer[];

export interface UserAnswer {
  questionId: number;
  answer: string;
}

export enum Status {
  NONE = "",
  TECH = "tech",
  THEORY = "theory",
}

export interface QuizState {
  questions: Answer[];
  currentQuestionIndex: number;
  status: Status;
  error: string | null;
  answers: UserAnswer[];
  results: null | {
    result: string;
    mainMessage: string;
    secondaryMessage: string;
  };
}

export type QuizCredentials = UserAnswer[];

export interface ResultData {
  result: string;
  mainMessage: string;
  secondaryMessage: string;
}
