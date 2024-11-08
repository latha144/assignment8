import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/languages");
  };
  return (
    <main className="container not-found mt-3 border-bottom">
      <div>
        <h2 className="text-center">404</h2>
        <p className="text-center">
          <button
            className="btn btn-sm btn-outline-secondary"
            onClick={handleNavigate}
          >
            Go Back Home
          </button>
        </p>
      </div>
    </main>
  );
};

export default NotFound;
