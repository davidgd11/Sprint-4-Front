import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx'
import Login from './Components/Login.jsx';
import Header from './Components/Header.jsx';
import Contato from './Components/Contato.jsx';



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,

    children: [
      { path: '/', element: <Header/>},
      { path: '/login', element: <Login /> },
      { path: '/contato', element: <Contato/>}
    ],
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>,
);
