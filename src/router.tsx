import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/layouts/MainLayout';
import ErrorPage from './components/layouts/ErrorPage';
import { questionRouter } from './pages/questions/router';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [questionRouter],
  },
]);
