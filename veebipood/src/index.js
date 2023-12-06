import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

// Navigeerimiseks (Route-miseks)
// 1. npm install react-router-dom <--- lisatakse node_modules kausta route-miseks vajalik kood
// 2. import BrowserRouter
// 3. BrowserRouter tag panna <App/> ümber
// 4. App.js failis tekitada URL ja HTML seosed

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
