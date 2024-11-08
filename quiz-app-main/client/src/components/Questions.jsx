import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import QuestionsNo from "../components/QuestionNo";
import Instructions from "../components/Instructions";

const Questions = ({
  questions,
  isQuizStarted,
  selectedOptions,
  setSelectedOptions,
  handleSubmit,
  quizTime,
  submitting,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [questionIndex, setQuestionIndex] = useState(0);

  useEffect(() => {
    let questionNo = searchParams.get("q");
    if (questionNo) {
      questionNo = parseInt(questionNo, 10) - 1;
      if (questionNo >= 0 && questionNo < questions.length) {
        setQuestionIndex(questionNo);
      }
    }
  }, [searchParams, questions]);

  useEffect(() => {
    localStorage.setItem("selectedOptions", JSON.stringify(selectedOptions));
  }, [selectedOptions]);

  const handleNext = () => {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
      setSearchParams({ q: questionIndex + 2 });
    }
  };

  const handlePrev = () => {
    if (questionIndex > 0) {
      setQuestionIndex(questionIndex - 1);
      setSearchParams({ q: questionIndex });
    }
  };

  const handleOptionChange = (questionId, option) => {
    setSelectedOptions((prevSelectedOptions) => {
      const newSelectedOptions = {
        ...prevSelectedOptions,
        [questionId]: option,
      };

      localStorage.setItem(
        "selectedOptions",
        JSON.stringify(newSelectedOptions)
      );
      return newSelectedOptions;
    });
  };

  const handleResultSubmit = () => {
    handleSubmit();
  };

  return (
    <>
      {!isQuizStarted ? (
        <>
          <Instructions quizTime={quizTime} />
        </>
      ) : (
        <>
          <div className="col-md-7 questions">
            {questions.length > 0 ? (
              <div key={questions[questionIndex]._id}>
                <h4>
                  {questionIndex + 1}. {questions[questionIndex].question}
                </h4>
                <ul className="options list-unstyled">
                  {Object.entries(questions[questionIndex].options).map(
                    ([key, value]) => (
                      <li className="d-flex gap-2 my-3" key={key}>
                        <input
                          type="radio"
                          id={`option${key}`}
                          name={`option${questions[questionIndex]._id}`}
                          className="option-radio"
                          checked={
                            selectedOptions[questions[questionIndex]._id] === key
                          }
                          onChange={() =>
                            handleOptionChange(
                              questions[questionIndex]._id,
                              key
                            )
                          }
                        />
                        <label className="radio-label" htmlFor={`option${key}`}>
                          {key}. {value}
                        </label>
                      </li>
                    )
                  )}
                </ul>
              </div>
            ) : (
              <h4>No questions set</h4>
            )}
            <div className="action-btns">
              <button
                className={questionIndex === 0 ? "d-none" : "pre"}
                onClick={handlePrev}
                disabled={questionIndex === 0}
              >
                Previous
              </button>
              <button
                className={
                  questionIndex === questions.length - 1 ? "finish" : "next"
                }
                onClick={
                  questionIndex === questions.length - 1
                    ? handleResultSubmit
                    : handleNext
                }
                disabled={submitting || questions.length === 0}
              >
                {questionIndex === questions.length - 1 ? "submit" : "Next"}
              </button>
            </div>
          </div>
          <div className="col-md-4 questions-no mx-auto">
            <QuestionsNo
              questions={questions}
              selectedOptions={selectedOptions}
            />
          </div>
        </>
      )}
    </>
  );
};

export default Questions;
