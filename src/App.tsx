import React, { Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";

import AuthPage from "./pages/AuthPage/AuthPage";
import { PrivateRoute } from "./routes/PrivateRoute";
import { RestrictedRoute } from "./routes/RestrictedRoute";

import { refreshThunk, setToken } from "./redux/auth/operations";
import { AppDispatch } from "./redux/store";
import { selectRefreshToken, selectSid } from "./redux/auth/slice";

const Layout = React.lazy(() => import("./components/Layout/Layout"));
const MainPage = React.lazy(() => import("./pages/MainPage/MainPage"));
const ErrorPage = React.lazy(() => import("./pages/ErrorPage/ErrorPage"));
const TestPage = React.lazy(() => import("./pages/TestPage/TestPage"));
const ContactsPage = React.lazy(
  () => import("./pages/ContactsPage/ContactsPage")
);
const MaterialsPage = React.lazy(
  () => import("./pages/MaterialsPage/MaterialsPage")
);
const ResultsPage = React.lazy(() => import("./pages/ResultsPage/ResultsPage"));

function App() {
  const sid = useSelector(selectSid);
  const refreshToken = useSelector(selectRefreshToken);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (sid) {
      dispatch(refreshThunk({ sid, refreshToken }));
    }
  }, []);

  useEffect(() => {
    const persistedData = localStorage.getItem("persist:auth");

    if (persistedData) {
      const parsedData = JSON.parse(persistedData);
      const accessToken = parsedData.accessToken.replace(/"/g, "");

      if (accessToken) {
        setToken(accessToken);
      }
    }
  }, []);

  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={<PrivateRoute redirectTo="/auth" component={MainPage} />}
          />
          <Route
            path="test"
            element={<PrivateRoute redirectTo="/auth" component={TestPage} />}
          />
          <Route
            path="useful-info"
            element={
              <PrivateRoute redirectTo="/auth" component={MaterialsPage} />
            }
          />
          <Route
            path="results"
            element={
              <PrivateRoute redirectTo="/auth" component={ResultsPage} />
            }
          />
          <Route path="contacts" element={<ContactsPage />} />
          <Route
            path="auth"
            element={<RestrictedRoute redirectTo="/" component={AuthPage} />}
          />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Toaster />
    </Suspense>
  );
}

export default App;
