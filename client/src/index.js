import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Inicio from './components/inicio/Inicio'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    NavLink
  } from "react-router-dom";


import reportWebVitals from './reportWebVitals';



ReactDOM.render(
  <React.StrictMode>
              
		<Inicio/>									
										
  </React.StrictMode>,
  document.getElementById('general_services')
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
