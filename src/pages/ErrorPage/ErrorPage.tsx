import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>
          {error.statusText} - {error.status}
        </h1>
        <Link to="/" reloadDocument>
          На главную
        </Link>
      </div>
    );
  }
};

export default ErrorPage;
