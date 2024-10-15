import React from "react";
import s from "./AuthForm.module.css";
import { useDispatch } from "react-redux";
import { loginThunk, registerThunk } from "../../redux/auth/operations";
import { AppDispatch } from "../../redux/store";

const AuthForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleAuth = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget); // Отримати FormData з форми

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

    (target.namedItem("email") as HTMLInputElement).value = "";
    (target.namedItem("password") as HTMLInputElement).value = "";
  };

  const handleRegister = async (email: string, password: string) => {
    dispatch(registerThunk({ email, password }));
  };

  const handleLogin = async (email: string, password: string) => {
    dispatch(loginThunk({ email, password }));
  };

  return (
    <div>
      <form className={s.form} onSubmit={handleAuth}>
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
