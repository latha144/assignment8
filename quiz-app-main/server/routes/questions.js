const express = require("express");
const router = express.Router();
const Question = require("../models/Questions");
const mongoose = require("mongoose");

router.post("/100", async (req, res) => {
  try {
    const questions = await Question.insertMany([
      {
        language: "667e768e780e3dc9c6eafc1b",
        question: "What is Python used for?",
        options: {
          A: "Web development",
          B: "Data analysis",
          C: "Artificial intelligence",
          D: "All of the above",
        },
        answer: "D",
      },
      {
        language: "667e768e780e3dc9c6eafc1b",
        question: "Who created Python?",
        options: {
          A: "Guido van Rossum",
          B: "James Gosling",
          C: "Brendan Eich",
          D: "Dennis Ritchie",
        },
        answer: "A",
      },
      {
        language: "667e768e780e3dc9c6eafc1b",
        question: "What is a Python decorator?",
        options: {
          A: "A function that modifies other functions",
          B: "A way to decorate a Python room",
          C: "A type of Python snake",
          D: "None of the above",
        },
        answer: "A",
      },
      {
        language: "667e768e780e3dc9c6eafc1b",
        question: "What is a Python list comprehension?",
        options: {
          A: "A concise way to create lists",
          B: "A type of Python conference",
          C: "A method to compare Python lists",
          D: "A Python module for comprehension tasks",
        },
        answer: "A",
      },
      {
        language: "667e768e780e3dc9c6eafc1b",
        question: "What is the Python GIL?",
        options: {
          A: "Global Interpreter Lock",
          B: "A Python library",
          C: "A Python coding convention",
          D: "A Python debugging tool",
        },
        answer: "A",
      },
    ]);
    res.status(200).json(questions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/101/:languageId", async (req, res) => {
  try {
    const questions = await Question.find({
      language: new mongoose.Types.ObjectId(req.params.languageId),
    })
      .populate("language")
      .exec();
    res.status(200).json(questions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
