import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import s from "./Layout.module.css";

const Layout = () => {
  return (
    <div className={s.main_wrapper}>
      <header className={s.header}>
        <Header />
      </header>
      <main className={s.main}>
        <Outlet />
      </main>
      <footer className={s.footer}>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
