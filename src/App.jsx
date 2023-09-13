import { Suspense } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import styles from "./App.module.scss";
import routes from "../src/config/router";
import PrivateRoute from "./utils/PrivateRoute";
import PublicRoute from "./utils/PrivateRoute";
import Sidebar from "./components/Sidebar/Sidebar";
import Loader from "./components/Loader/Loader";

function App() {
  //Temporary isAuth === true
  const isAuth = true;

  return (
    <div className={styles.container}>
      <Sidebar className={styles.sidebar} />
      <div className={styles.content}>
        <Suspense fallback={<Loader />}>
          <Routes>
            {routes.map(
              ({ Component, props, isPrivate, isPublicOnly, ...route }) => (
                <Route
                  {...route}
                  key={route}
                  element={
                    isPrivate ? (
                      <PrivateRoute isAuth={isAuth}>
                        <Component {...props} />
                      </PrivateRoute>
                    ) : (
                      <PublicRoute isAuth={isAuth} isPublicOnly={isPublicOnly}>
                        <Component {...props} />
                      </PublicRoute>
                    )
                  }
                />
              )
            )}
          </Routes>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
