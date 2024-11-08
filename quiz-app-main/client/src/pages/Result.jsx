import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../components/AuthProvider";
import { Link } from "react-router-dom";
import { MdOutlineCancel, MdOutlineViewList, MdQuiz } from "react-icons/md";

const Result = () => {
  const [result, setResult] = useState([]);
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getResult = async () => {
      try {
        const response = await axios.get(`/api/result/101/${user}`);
        const data = await response.data;
        // console.log(data);
        setResult(data);
        setLoading(false);
      } catch (err) {
        console.log(err.message);
      }
    };
    getResult();
  }, [loading]);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `/api/result/102/${id.language}/${id.attempt}`
      );
       setLoading(true);
    } catch (err) {
      console.log(err.message);
    }
  };

  if (loading) {
    return (
      <div className="text-center text-muted fw-bolder mt-3">Loading...</div>
    );
  }

  return (
    <main className="container result">
      <div className="row">
        <div className="col-md-10 mx-auto table-responsive">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th colSpan={6} className="bg-black text-white">
                  <span className="d-flex align-items-center">
                    <MdOutlineViewList style={{ fontSize: "25px" }} /> Results
                  </span>
                </th>
                <th colSpan={1} className="bg-black text-white">
                  <Link
                    to="/languages"
                    className="text-decoration-none text-white d-flex align-items-center"
                  >
                    <MdQuiz /> Home
                  </Link>
                </th>
              </tr>
              <tr className="text-nowrap">
                <th>#</th>
                <th>Language</th>
                <th>Attempts</th>
                <th>Correct Answers</th>
                <th>Wrong Answers</th>
                <th>Score</th>
                <th className="text-center">Reset</th>
              </tr>
            </thead>
            <tbody>
              {result.length > 0 ? (
                result.map((result, key) => (
                  <tr key={result._id.language + result._id.attempt}>
                    <td>{key + 1}</td>
                    <td className="text-capitalize fw-bolder">
                      {result.languageName}
                    </td>
                    <td>
                      attempt <b>{result.attempt}</b>
                    </td>
                    <td className="text-capitalize fw-bolder text-success">
                      {result.correctAnswers}
                    </td>
                    <td className="text-capitalize fw-bolder text-danger">
                      {result.wrongAnswers}
                    </td>
                    <td className="text-capitalize fw-bolder text-primary-emphasis">
                      {result.score.toFixed(0)}%
                    </td>
                    <td className="text-center">
                      <button
                        className="btn btn-sm btn-outline-danger bg-danger"
                        onClick={() => handleDelete(result._id)}
                      >
                        <MdOutlineCancel
                          style={{
                            color: "#fff",
                            fontSize: "17px",
                            textAlign: "center",
                          }}
                        />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7}>
                    <h5>No result</h5>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default Result;
