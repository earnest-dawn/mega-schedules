import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import './index.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/HomeP';
import Project from './pages/PortfolioP';
import ErrorPage from './pages/ErrorPage';
import Contact from './components/ContactC/index.jsx';
import Portfolio from './pages/PortfolioP';
import AppointmentSetter from './pages/SchedulesP';
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/Portfolio',
                element: <Portfolio />,
            },
            {
                path: '/errorpage',
                element: <ErrorPage />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/scheduling',
                element: <AppointmentSetter />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);
