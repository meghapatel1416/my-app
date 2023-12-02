import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Home } from './Home';
import { Counter } from './Counter';
import { MultipleState } from './MultipleState';
import { APIDisplay } from './APIDisplay';
import APIDisplayWithClass from './APIDisplayWithClass';
import FormFunction from './FormFunction';
import { Ecommerce } from './Ecommerce';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyProps from './MyProps';
import FormInClass from './FormInClass';
import { SignupFormikForm } from './SignupFormikForm';
import DataManagement from './DataManagement';
import SignUpFormValidation from './SignUpFormValidation';
import FormWithYup from './FormWithYup';
import { FormBootstarpFormik } from './FormBootstarpFormik';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <FormBootstarpFormik/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();