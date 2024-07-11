import React from 'react';
import ReactDOM from 'react-dom/client';
import NotFoundPage from './pages/NotFoundPage.tsx';
import Dogs from './pages/Dogs.tsx';
import Home from './pages/Home.tsx';
import Layout from './pages/Layout.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/dogs',
        element: <Dogs />,
      },
      {
        path: '/cats',
        element: <NotFoundPage />,
      },
      {
        path: '/collections',
        element: <NotFoundPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);