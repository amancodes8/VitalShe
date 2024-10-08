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

import Nutrition from './components/Nutrition';
import Resources from './components/Resources';
import TermsOfService from './components/TermsOfService';
import PrivacyPolicy from './components/ProvacyPolicy';
import ContactUs from './components/Contacts';
import VitalPlus from './components/VitalPlus';


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

      { path: "/nutrition", element: <Nutrition /> },
      { path: "/resources", element: <Resources /> },
      { path: "/terms", element: <TermsOfService /> },
      { path: "/privacy", element: <PrivacyPolicy /> },
      { path: "/contact", element: <ContactUs /> },
      { path: "/plus", element: <VitalPlus /> }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
