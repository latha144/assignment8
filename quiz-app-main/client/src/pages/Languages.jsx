import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Languages = () => {
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    async function getLanguages() {
      try {
        const response = await axios.get("/api/language/100");
        const data = await response.data;
        setLanguages(data);
      } catch (err) {
        console.log(err.message);
      }
    }
    getLanguages();
  }, []);

  const handleClick = () => {
    localStorage.removeItem("selectedOptions");
    localStorage.removeItem("isQuizStarted");
    localStorage.removeItem("endTime");
  };

  return (
    <main className="container mt-5 languages">
      <h4 className="text-center mb-3">Select a language</h4>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <ul className="list-group">
            {languages.length ? (
              languages.map((language) => (
                <Link
                  key={language._id}
                  to={`/quiz/${language._id}`}
                  className="text-decoration-none"
                >
                  <li
                    className="list-group-item d-flex justify-content-between align-items-center shadow-none"
                    style={{ cursor: "pointer" }}
                    onClick={handleClick}
                  >
                    {language.name}
                    <span className="badge rounded-pill">
                      {language.time} min
                    </span>
                  </li>
                </Link>
              ))
            ) : (
              <li className="list-group-item shadow-none">
                No Languages Set.
              </li>
            )}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Languages;
