import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout'; // Import only the components you have
import './index.css';
import MyCalendar from './components/MyCalendar';
import About from './components/About';
import Home from './components/Home';
import Login from './components/Login';
import ArticlesPage from './components/ArticlesPage';
import Services from './components/Services';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/calendar", element: <MyCalendar /> },
      { path: "/about", element: <About /> },
      { path: "/home", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/articles", element: <ArticlesPage /> },
      { path: "/services", element: <Services /> },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
