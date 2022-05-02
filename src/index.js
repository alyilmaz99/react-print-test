import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Example from './example'
/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Example />
, document.getElementById('app-root'));
