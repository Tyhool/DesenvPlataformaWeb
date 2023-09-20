import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './Componentes/Header';
import Home from './pages/Home/Home';
import Faq from './pages/Faq/Faq';
import Cadastro from './pages/Cadastro/Cadastro';
import Limpo from './pages/Limpo/Limpo';
import Erro from './pages/ErroPage/Erro';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Erro/>,
    children: [
      {
        path: '/',
        element: <Limpo />,
      },

      {
        path: 'Home',
        element: <Home />,
      },
      {
        path: 'Cadastro',
        element: <Cadastro />,
      },
      {
        path: 'Faq',
        element: <Faq />,
      },
    ],
  },

])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
