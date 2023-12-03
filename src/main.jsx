import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
// Bringing in the pages the router will use to conditionally show the appropriate views
import AboutMePage from './pages/AboutMePage';
import ContactMePage from './pages/ContactMePage';
import PortfolioPage from './pages/PortfolioPage';
import Resumepage from './pages/ResumePage';
// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <AboutMePage />,
      },
      {
        path: 'portfolio',
        element: <PortfolioPage />,
      },
      {
        path: 'contact',
        element: <ContactMePage />,
      },
      {
        path: 'resume',
        element: <Resumepage />,
      },
    ],
  },
]);
// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);