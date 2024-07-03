import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<HomePage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
