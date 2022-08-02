import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App.tsx';
import { NhlContextProvider } from './context/NhlContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NhlContextProvider>
      <App />
    </NhlContextProvider>
  </React.StrictMode>
);
