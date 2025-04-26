import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import TagManager from 'react-gtm-module';
import './index.css';
import './styles/theme.css'; // Import the custom theme styles
import App from './App';
import reportWebVitals from './reportWebVitals';

const tagManagerArgs = {
  gtmId: 'GTM-WVCVM282',
};

TagManager.initialize(tagManagerArgs);

const root = ReactDOM.createRoot(document.getElementById('root')); // Create root
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
