import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../components/AuthProvider";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username) {
      if (username.length > 2) {
        login(username);
        navigate("/languages");
        setError(null);
        setUsername("");
      } else {
        setError("Username must be 2 chars and above.");
      }
    } else {
      setError("Plese provide your username.");
    }
  };
  return (
    <form className="form login" onSubmit={handleLogin}>
      <h4>
        Provide <strong>username</strong>
      </h4>
      <input
        type="text"
        placeholder="Enter your username"
        autoComplete="off"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <small className="text-danger">{error && error}</small>

      <button
        type="submit"
        className="btn btn-sm btn-outline-primary mt-3 w-50 fw-bolder shadow-none"
      >
        Continue
      </button>
    </form>
  );
};

export default Login;
