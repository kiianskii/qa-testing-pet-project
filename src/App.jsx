import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import TestPage from "./pages/TestPage/TestPage";

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="test" element={<TestPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
