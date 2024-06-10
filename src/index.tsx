import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <PrimeReactProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </PrimeReactProvider>
);
