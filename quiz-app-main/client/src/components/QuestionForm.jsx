// import React, { useState } from "react";
// import axios from "axios";

// const QuestionForm = () => {
//   const [questionData, setQuestionData] = useState({
//     language: "",
//     question: "",
//     options: {
//       A: "",
//       B: "",
//       C: "",
//       D: "",
//     },
//     answer: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setQuestionData({
//       ...questionData,
//       [name]: value,
//     });
//   };

//   const handleOptionChange = (e) => {
//     const { name, value } = e.target;
//     setQuestionData({
//       ...questionData,
//       options: {
//         ...questionData.options,
//         [name]: value,
//       },
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios
//       .post("/api/questions", questionData)
//       .then((response) => {
//         console.log("Question added successfully", response.data);
//         // Reset form after submission
//         setQuestionData({
//           language: "",
//           question: "",
//           options: {
//             A: "",
//             B: "",
//             C: "",
//             D: "",
//           },
//           answer: "",
//         });
//       })
//       .catch((error) => {
//         console.error("There was an error adding the question!", error);
//       });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Language:
//         <input
//           type="text"
//           name="language"
//           value={questionData.language}
//           onChange={handleChange}
//         />
//       </label>
//       <br />
//       <label>
//         Question:
//         <input
//           type="text"
//           name="question"
//           value={questionData.question}
//           onChange={handleChange}
//         />
//       </label>
//       <br />
//       <label>
//         Option A:
//         <input
//           type="text"
//           name="A"
//           value={questionData.options.A}
//           onChange={handleOptionChange}
//         />
//       </label>
//       <br />
//       <label>
//         Option B:
//         <input
//           type="text"
//           name="B"
//           value={questionData.options.B}
//           onChange={handleOptionChange}
//         />
//       </label>
//       <br />
//       <label>
//         Option C:
//         <input
//           type="text"
//           name="C"
//           value={questionData.options.C}
//           onChange={handleOptionChange}
//         />
//       </label>
//       <br />
//       <label>
//         Option D:
//         <input
//           type="text"
//           name="D"
//           value={questionData.options.D}
//           onChange={handleOptionChange}
//         />
//       </label>
//       <br />
//       <label>
//         Answer:
//         <input
//           type="text"
//           name="answer"
//           value={questionData.answer}
//           onChange={handleChange}
//         />
//       </label>
//       <br />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default QuestionForm;
