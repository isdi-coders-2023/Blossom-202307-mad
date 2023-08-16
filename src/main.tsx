import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';
import { WebContextProvider } from './context/app-context-provider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WebContextProvider>
      <App />
    </WebContextProvider>
  </React.StrictMode>
);
