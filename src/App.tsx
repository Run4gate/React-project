import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import './App.css';
import HomePage from './pages/HomePage.tsx';

const router = createBrowserRouter([{path: '/', element: <HomePage />}])
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
