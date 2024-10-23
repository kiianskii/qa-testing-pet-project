import AuthForm from "../../components/AuthForm/AuthForm";
import s from "./AuthPage.module.css";

const AuthPage = () => {
  return (
    <section className={s.page}>
      <div className={s.title_wrapper}>
        <h1 className={s.title}>Pro Test</h1>
        <p className={s.desc}>
          <span className={s.text}>[</span> We will help you find weak points in
          knowledge so that you can strengthen it. We will show you what is
          relevant to know for a <span className={s.text}>QA Engineer</span> and
          will try to make the learning process more diverse_{" "}
          <span className={s.text}>]</span>
        </p>
      </div>
      <AuthForm />
    </section>
  );
};

export default AuthPage;
