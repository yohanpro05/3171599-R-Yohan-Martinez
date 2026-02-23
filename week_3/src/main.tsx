import React from 'react';
import ReactDOM from 'react-dom/client';
import { Dashboard } from './components/Dashboard';  // ← ajusta si Dashboard está en src/components/Dashboard.tsx

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Dashboard />
  </React.StrictMode>
);