import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import { Layout } from "../components/Layout/Layout";
import { Main } from "@/pages/Main/Main";
import { Quizzes } from "@/pages/Quizzes/Quizzes";
import { QuizzesList } from "../pages/QuizzesList/QuizzesList";
import { QuizStart } from "@/pages/QuizStart/QuizStart";
import { QuizStatistic } from "../pages/QuizStatistic/QuizStatistic";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary.jsx";
import { RequireAuth } from "../hoc/RequireAuth.jsx";
import { withLazyLoadingComponent } from "@/hoc/withLazyComponent.js";
import { lazy } from "react";

const LazyLogin = withLazyLoadingComponent(lazy(() => import("../pages/Login/Login")));
const LazyProfile = withLazyLoadingComponent(lazy(() => import("../pages/Profile/Profile")));

enum APP_ROUTES {
  ROOT = "/",
  QUIZZES = "quizzes",
  QUIZZES_TYPE = "/quizzes/:type",
  QUIZ_START_ID = "/quizStart/:id",
  QUIZ_STAT_CATEG_ID = "/quizStatistic/:category/:id",
  LOGIN = "/login",
  PROFILE = "/profile",
}

const router = createBrowserRouter([
  {
    path: APP_ROUTES.ROOT,
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: APP_ROUTES.QUIZZES,
        element: <Quizzes />,
        handle: { crumb: () => <Link to={APP_ROUTES.QUIZZES}>Викторины</Link> },
      },
      {
        path: APP_ROUTES.QUIZZES_TYPE,
        element: <QuizzesList />,
        handle: { crumb: () => <Link to={APP_ROUTES.QUIZZES_TYPE}>абоба</Link> },
      },
      {
        path: APP_ROUTES.QUIZ_START_ID,
        element: <QuizStart />,
      },
      {
        path: APP_ROUTES.QUIZ_STAT_CATEG_ID,
        element: <QuizStatistic />,
      },
      {
        path: APP_ROUTES.LOGIN,
        element: <LazyLogin />,
      },
      {
        path: APP_ROUTES.PROFILE,
        element: (
          <RequireAuth>
            <LazyProfile />
          </RequireAuth>
        ),
      },
    ],
  },
]);

const Routing = () => {
  return <RouterProvider router={router} />;
};

export default Routing;
