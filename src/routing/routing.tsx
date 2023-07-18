import { Login } from "../pages/Login/Login.jsx";
import { Profile } from "../pages/Profile/Profile";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "../components/Layout/Layout";
import { Main } from "../pages/Main/Main";
import { Quizzes } from "../pages/Quizzes/Quizzes";
import { QuizzesList } from "../pages/QuizzesList/QuizzesList";
import { QuizStart } from "../pages/QuizStart/QuizStart";
import { QuizStatistic } from "../pages/QuizStatistic/QuizStatistic";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary.jsx";
import { RequireAuth } from "../hoc/RequireAuth.jsx";
import { useHandleSessionQuery, useLazyLogoutQuery } from "../redux/auth.js";
import { useDispatch } from "react-redux";
import { signin, signout } from "../redux/slices/auth.slice.js";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "/main",
        element: <Main />,
      },
      {
        path: "/quizzes",
        element: <Quizzes />,
      },
      {
        path: "/quizzes/:type",
        element: <QuizzesList />,
      },
      {
        path: "/quizStart/:id",
        element: <QuizStart />,
      },
      {
        path: "/quizStatistic/:category/:id",
        element: <QuizStatistic />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/profile",
        element: (
          <RequireAuth>
            <Profile />
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
