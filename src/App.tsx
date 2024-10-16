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
import { setToken } from "./redux/auth/operations";

function App() {
  useEffect(() => {
    const persistedData = localStorage.getItem("persist:auth");

    if (persistedData) {
      const parsedData = JSON.parse(persistedData);

      const accessToken = parsedData.accessToken.replace(/"/g, "");

      if (accessToken) {
        console.log(accessToken);

        setToken(accessToken);
      } else {
        console.log("Access Token not found");
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
          <Route path="contacts" element={<ContactsPage />} />
          <Route
            path="auth"
            element={<RestrictedRoute redirectTo="/" component={AuthPage} />}
          />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
