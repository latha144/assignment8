const express = require("express");
const router = express.Router();
const Language = require("../models/Languages");
const { default: mongoose } = require("mongoose");

router.get("/100", async (req, res) => {
  try {
    const language = await Language.find();
    res.status(200).json(language);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
router.get("/101/:languageId", async (req, res) => {
  try {
    const language = await Language.find({_id: new mongoose.Types.ObjectId(req.params.languageId)});
    res.status(200).json(language);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
