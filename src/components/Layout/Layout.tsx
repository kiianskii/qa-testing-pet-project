import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import s from "./Layout.module.css";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Loader from "../Loader/Loader";
import BurgerMenu from "../Modal/BurgerMenu";

import { useToggle } from "../../hooks/useToggle";
import { selectisLoading } from "../../redux/loader/loaderSlice";

const Layout = () => {
  const isLoading = useSelector(selectisLoading);
  const { openModal, closeModal, isOpen } = useToggle();
  return (
    <div className={s.main_wrapper}>
      <header className={s.header}>
        <Header isOpen={isOpen} closeModal={closeModal} openModal={openModal} />
      </header>
      {!isOpen ? (
        <>
          <main className={s.main}>
            <Outlet />
          </main>
          <footer className={s.footer}>
            <Footer />
          </footer>{" "}
        </>
      ) : (
        <BurgerMenu closeModal={closeModal} />
      )}
      {isLoading && <Loader />}
    </div>
  );
};

export default Layout;
