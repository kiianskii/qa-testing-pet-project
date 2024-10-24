import { Suspense, useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import MainPage from "./pages/MainPage/MainPage";
import AuthPage from "./pages/AuthPage/AuthPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import TestPage from "./pages/TestPage/TestPage";
import MaterialsPage from "./pages/MaterialsPage/MaterialsPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import { PrivateRoute } from "./routes/PrivateRoute";
import { RestrictedRoute } from "./routes/RestrictedRoute";
import { refreshThunk, setToken } from "./redux/auth/operations";
import ResultsPage from "./pages/ResultsPage/ResultsPage";
import { Toaster } from "react-hot-toast";
import { AppDispatch } from "./redux/store";
import { selectRefreshToken, selectSid } from "./redux/auth/slice";
import { useDispatch, useSelector } from "react-redux";

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
