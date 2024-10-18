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
  const [isDone, setIsDone] = useState(false);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLFormElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };

  const handleAuth = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsDone(false);
    const formData = new FormData(event.currentTarget);

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const target = event.currentTarget.elements;

    const signInButton = target.namedItem("signIn") as HTMLButtonElement;
    const signUpButton = target.namedItem("signUp") as HTMLButtonElement;

    if (document.activeElement === signInButton) {
      handleLogin(email, password);
    } else if (document.activeElement === signUpButton) {
      handleRegister(email, password);
    }
    if (isDone) {
      (target.namedItem("email") as HTMLInputElement).value = "";
      (target.namedItem("password") as HTMLInputElement).value = "";
    }
  };

  const handleRegister = async (email: string, password: string) => {
    try {
      const resultAction = await dispatch(registerThunk({ email, password }));

      if (!registerThunk.fulfilled.match(resultAction)) {
        toast("Something went wrong, try again...", msgOptions);
      } else {
        setIsDone(true);
      }
    } catch (error) {
      console.error("Error:", error);
      toast("Something went wrong, try again...", msgOptions);
    }
  };

  const handleLogin = async (email: string, password: string) => {
    try {
      const resultAction = await dispatch(loginThunk({ email, password }));

      if (!loginThunk.fulfilled.match(resultAction)) {
        toast("Something went wrong, try again...", msgOptions);
      } else {
        setIsDone(true);
      }
    } catch (error) {
      console.error("Error:", error);
      toast("Something went wrong, try again...", msgOptions);
    }
  };

  return (
    <div>
      <form className={s.form} onSubmit={handleAuth} onKeyDown={handleKeyPress}>
        <p>Register or login to our app using e-mail and password:</p>
        <div className={s.input_wrapper}>
          <input
            className={s.input}
            type="email"
            name="email"
            placeholder="Email"
            required
          />
        </div>
        <div className={s.input_wrapper}>
          <input
            className={s.input}
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </div>
        <div className={s.button_wrapper}>
          <button
            className={s.button + " " + s.btn_in}
            type="submit"
            name="signIn"
          >
            SIGN IN
          </button>
          <button
            className={s.button + " " + s.btn_up}
            type="submit"
            name="signUp"
          >
            SIGN UP
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
