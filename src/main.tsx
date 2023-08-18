import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App.tsx';
import { WebContextProvider } from './context/app-context-provider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <WebContextProvider>
        <App />
      </WebContextProvider>
    </Router>
  </React.StrictMode>
);
