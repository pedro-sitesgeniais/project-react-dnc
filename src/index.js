import React from 'react';
import ReactDOM from 'react-dom/client';
import AppClock from './AppClock';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppClock />
  </React.StrictMode>
);

reportWebVitals();
