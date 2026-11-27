import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './Pages/login.jsx';
import RegisterPage from './Pages/register.jsx';
import Errorpage from './Pages/404.jsx';
import ProductsPage from './Pages/products.jsx';
import ProfilePage from './Pages/profile.jsx';
import DetailProductPage from './Pages/detailProduct.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Ini Adalah Landing Page</div>,
    errorElement: <Errorpage />
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/products',
    element: <ProductsPage />,
  },
  {
    path: '/profile',
    element: <ProfilePage />,
  },
  {
    path: '/product/:id',
    element: <DetailProductPage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
