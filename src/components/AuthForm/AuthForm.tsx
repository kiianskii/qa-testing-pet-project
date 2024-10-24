import React, { useState } from "react";
import s from "./AuthForm.module.css";
import { useDispatch } from "react-redux";
import { loginThunk, registerThunk } from "../../redux/auth/operations";
import { AppDispatch } from "../../redux/store";
import toast from "react-hot-toast";

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

  const handleRegister = async () => {
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
            onChange={(e) => setEmail(e.target.value)}
            required
          />
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
