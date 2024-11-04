import React, { useState } from "react";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

import s from "./AuthForm.module.css";
import { loginThunk, registerThunk } from "../../redux/auth/operations";
import { AppDispatch } from "../../redux/store";

const msgOptions = {
  icon: "😞",
  style: {
    border: "1px solid #713200",
    padding: "16px",
    color: "#713200",
  },
  iconTheme: {
    primary: "#713200",
    secondary: "#FFFAEE",
  },
};

const AuthForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState(true);

  const isValidEmail = (email: string): boolean => {
    const emailRegexp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegexp.test(email);
  };

  const handleEmailBlur = () => {
    setValid(isValidEmail(email));
  };

  const handleRegister = async () => {
    if (!isValidEmail(email)) {
      setValid(false);
      return;
    }
    setValid(true);
    try {
      const resultAction = await dispatch(registerThunk({ email, password }));
      if (!registerThunk.fulfilled.match(resultAction)) {
        toast("Something went wrong, try again...", msgOptions);
      }
    } catch (error) {
      console.error("Error:", error);
      toast("Something went wrong, try again...", msgOptions);
    }
  };

  const handleLogin = async () => {
    if (!isValidEmail(email)) {
      setValid(false);
      return;
    }
    setValid(true);
    try {
      const resultAction = await dispatch(loginThunk({ email, password }));
      if (!loginThunk.fulfilled.match(resultAction)) {
        toast("Something went wrong, try again...", msgOptions);
      }
    } catch (error) {
      console.error("Error:", error);
      toast("Something went wrong, try again...", msgOptions);
    }
  };

  return (
    <div className={s.form_wrapper}>
      <div className={s.form}>
        <p>Register or login to our app using e-mail and password:</p>
        <div className={s.input_wrapper}>
          <input
            className={s.input}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            onBlur={handleEmailBlur}
            required
          />
          {valid ? "" : <p className={s.validation}>Email is not valid</p>}
        </div>
        <div className={s.input_wrapper}>
          <input
            className={s.input}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className={s.button_wrapper}>
          <button
            className={s.button + " " + s.btn_in}
            type="button"
            onClick={handleLogin}
          >
            SIGN IN
          </button>
          <button
            className={s.button + " " + s.btn_up}
            type="button"
            onClick={handleRegister}
          >
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
