import { RootState } from "../redux/store";

export interface User {
  data: {
    accessToken: string;
    refreshToken: string;
    sid: string;
    userData: {
      email: string;
      id: string;
    };
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

export type regCredentials = {
  email: string;
  password: string;
};

export type logCredentials = {
  email: string;
  password: string;
};

export type refreshRes = {
  data: {
    newAccessToken: string;
    newRefreshToken: string;
    newSid: string;
  };
};

export type refreshCredentials = {
  sid: string;
};

export interface Answer {
  question: string;
  questionId: number;
  answers: string[];
}

export interface AnswersResponse {
  data: Answer[];
}

export interface UserAnswer {
  questionId: number;
  answer: string;
}

export interface QuizState {
  questions: Answer[];
  currentQuestionIndex: number;
  status: "" | "tech" | "theory";
  error: string | null;
  answers: UserAnswer[];
  results: null | {
    result: string;
    mainMessage: string;
    secondaryMessage: string;
  };
}

export type quizCredentials = UserAnswer[];

export interface resultData {
  data: {
    result: string;
    mainMessage: string;
    secondaryMessage: string;
  };
}
