import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Home from './home';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='Home' element={<Home />} />
        {/* <Route path="invoices" element={<Invoices />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
