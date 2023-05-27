import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Main } from '../pages/Main/Main';
import { Quizzes } from '../pages/Quizzes/Quizzes';
import { Quiz } from '../pages/Quiz';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/main',
        element: <Main />,
      },
      {
        path: '/quizzes',
        element: <Quizzes />,
      },
      {
        path: '/quizzes/:type',
        element: <Quiz />,
      },
    ],
  },
]);

const Routing = () => {
  return <RouterProvider router={router} />;
};

export default Routing;
