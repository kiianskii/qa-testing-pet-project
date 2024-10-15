import { RootState } from "../redux/store";

// export interface User {
//   data: {
//     token: string;
//     user: {
//       username: string;
//       email: string;
//     };
//   };
// }

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
