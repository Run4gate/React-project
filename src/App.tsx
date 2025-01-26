import { createBrowserRouter, RouterProvider } from 'react-router';
import './App.css';
import HomePage from './pages/HomePage';

const routes = {homePage: {path: '/', element: <HomePage />}}

const router = createBrowserRouter([routes.homePage])
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
