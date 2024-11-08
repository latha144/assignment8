import React, { useContext, useEffect, useState } from "react";
import Login from "./Login";
import { AuthContext } from "../components/AuthProvider";

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <main className="container">
      <div className="row home">
        <div className="col-10 mx-auto">
          {user ? (
            <p>
              You are logged in as{" "}
              <strong className="text-capitalize">{user}</strong>
            </p>
          ) : (
            <Login />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
