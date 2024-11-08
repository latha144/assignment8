import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const QuizInstructions = ({ quizTime }) => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-12">
        <div className="text-dark px-4 py-3">
          <h5 className="mb-0">Quiz Instructions</h5>
        </div>
        <div className="bg-light py-3 px-4">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <h6 className="mb-1">1. Read Questions Carefully</h6>
            </li>
            <li className="list-group-item">
              <h6 className="mb-1">
                2. Manage Your Time: <b>{quizTime} min</b>
              </h6>
            </li>
            <li className="list-group-item">
              <h6 className="mb-1">3. Answer All Questions</h6>
            </li>
            <li className="list-group-item">
              <h6 className="mb-1">4. Review Your Answers</h6>
            </li>
            <li className="list-group-item">
              <h6 className="mb-1">5. Submit Your Quiz</h6>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default QuizInstructions;
