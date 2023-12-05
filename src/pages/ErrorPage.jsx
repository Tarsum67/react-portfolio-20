// Importing the 'useRouteError' hook from 'react-router-dom'
import { useRouteError } from 'react-router-dom';

// React component for the Error Page
export default function ErrorPage() {
  // Using the 'useRouteError' hook to get information about the error
  const error = useRouteError();

  // Logging the error information to the console
  console.error(error);

  return (
    // Error page container
    <div id="error-page">
      {/* Heading indicating an error */}
      <h1>Oops!</h1>
      <p> error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
