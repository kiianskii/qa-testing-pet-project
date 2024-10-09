import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <main>
      <header>
        <Header />
      </header>
      <section>
        <Outlet />
      </section>
      <footer>
        <Footer />
      </footer>
    </main>
  );
};

export default Layout;
