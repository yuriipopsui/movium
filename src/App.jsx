import { Suspense } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import styles from "./App.module.scss";
import routes from "../src/config/router";
import PrivateRoute from "./utils/PrivateRoute";
import PublicRoute from "./utils/PublicRoute";
import Sidebar from "./components/Sidebar/Sidebar";
import Loader from "./components/Loader/Loader";
import Header from "./components/Header/Header";
import { useSelector } from "react-redux";
import { userSelector } from "./store/selectors/usersSelector";

function App() {
  const { isAuth } = useSelector(userSelector);

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
                        <Header />
                        <Component {...props} />
                      </PrivateRoute>
                    ) : (
                      <PublicRoute isAuth={isAuth} isPublicOnly={isPublicOnly}>
                        <Component {...props} />
                        <Header />
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
