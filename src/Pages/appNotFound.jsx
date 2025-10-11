import React from "react";
import { useNavigate } from "react-router-dom";

const AppNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center h-[80vh] text-center">
      <h1 className="text-5xl font-bold text-red-600 mb-3">App Not Found</h1>
      <p className="text-gray-600 mb-6">
        Sorry, the app you’re looking for doesn’t exist or has been removed.
      </p>
      <button
        onClick={() => navigate("/products")}
        className="bg-indigo-600 text-white px-5 py-2 rounded-md hover:bg-indigo-700"
      >
        Back to All Apps
      </button>
    </div>
  );
};

export default AppNotFound;
