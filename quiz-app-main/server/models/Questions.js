const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  language: {
    type: Schema.Types.ObjectId,
    ref: "Language",
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  options: {
    type: Map,
    of: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
});

const Question = mongoose.model("Question", questionSchema);
module.exports = Question;
