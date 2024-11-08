import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          QuizApp
        </Link>
        <button
          className="navbar-toggler d-lg-none shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav me-auto mt-2 mt-lg-0">
            {user && (
              <li className="nav-item">
                <Link className="nav-link active" to="/languages">
                  Languages
                </Link>
              </li>
            )}
          </ul>
          {user && (
            <div className="d-flex my-2 my-lg-0 me-5 border-bottom" onClick={logout}>
              <Link className="text-white logout">{user}</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
