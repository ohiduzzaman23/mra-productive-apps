import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-7xl font-bold text-gray-700">404</h1>
      <p className="text-2xl text-gray-500 mt-3">
        {error?.statusText || "Page Not Found"}
      </p>
      <Link to="/">
        <button className="btn bg-[#6D36E5] text-white mt-5">Go Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
