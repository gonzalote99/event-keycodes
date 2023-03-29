import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ReactDom from 'react-dom';
import './style.css';
import App from './App';


ReactDom.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')

);
