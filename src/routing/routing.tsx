import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import { Layout } from "../components/Layout/Layout";
import { Main } from "@/pages/Main/Main";
import { Quizzes } from "@/pages/Quizzes/Quizzes";
import { Rules } from "@/pages/Rules/Rules";

import { QuizzesList } from "../pages/QuizzesList/QuizzesList";
import { QuizStart } from "@/pages/QuizStart/QuizStart";
import { QuizStatistic } from "../pages/QuizStatistic/QuizStatistic";
import { RequireAuth } from "../redux/features/auth/RequireAuth.jsx";
import { withLazyLoadingComponent } from "@/redux/features/auth/WithLazyComponent.js";
import { lazy } from "react";
import FullScreenErrorPage from "@/components/FullScreenErrorPage/FullScreenErrorPage.js";

const LazyLogin = withLazyLoadingComponent(
  lazy(() => import("../pages/Login/Login"))
);
const LazyProfile = withLazyLoadingComponent(
  lazy(() => import("../pages/Profile/Profile.jsx"))
);

enum APP_ROUTES {
  ROOT = "/",
  QUIZZES = "quizzes",
  QUIZZES_TYPE = "/quizzes/:type",
  QUIZ_START_ID = "/quizStart/:id",
  QUIZ_STAT_CATEG_ID = "/quizStatistic/:category/:id",
  LOGIN = "/login",
  PROFILE = "/profile",
  RULES = "/rules",
}

const router = createBrowserRouter([
  {
    path: APP_ROUTES.ROOT,
    element: <Layout />,
    errorElement: <FullScreenErrorPage />,
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
        handle: {
          crumb: () => <Link to={APP_ROUTES.QUIZZES_TYPE}>абоба</Link>,
        },
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
        path: APP_ROUTES.RULES,
        element: <Rules />,
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
