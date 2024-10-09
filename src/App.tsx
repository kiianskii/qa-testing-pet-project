import { Suspense } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import MainPage from "./pages/MainPage/MainPage";
import AuthPage from "./pages/AuthPage/AuthPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import TestPage from "./pages/TestPage/TestPage";
import MaterialsPage from "./pages/MaterialsPage/MaterialsPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";

function App() {
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="test" element={<TestPage />} />
          <Route path="useful-info" element={<MaterialsPage />} />
          <Route path="contacts" element={<ContactsPage />} />
        </Route>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
