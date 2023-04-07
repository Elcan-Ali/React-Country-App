import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider } from 'react-router-dom';
import { router } from './routing/Rounting';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <RouterProvider router={router}/> );
