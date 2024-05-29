import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home.tsx';
import ErrorPage from './pages/ErrorPage.tsx';
import CircularProgress from '@mui/material/CircularProgress';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider
      router={router}
      fallbackElement={<CircularProgress />}
    />
  </React.StrictMode>,
)
