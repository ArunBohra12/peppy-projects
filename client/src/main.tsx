import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { PageProvider } from './context/page.context';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <React.StrictMode>
      <PageProvider>
        <App />
      </PageProvider>
    </React.StrictMode>
  </BrowserRouter>
);
