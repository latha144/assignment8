const express = require("express");
const conn = require("./config/db");
const cors = require("cors");
require("dotenv").config();
conn();

const PORT = process.env.PORT || 8000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: "http://localhost:5173" }));

app.use("/api/language", require("./routes/languages"));
app.use("/api/question", require("./routes/questions"));
app.use("/api/result", require("./routes/results"));

app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
