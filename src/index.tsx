import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.tsx';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

