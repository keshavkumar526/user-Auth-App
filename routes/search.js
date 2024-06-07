const express = require("express");
const router = express.Router();

const strings = ["Race", "Part", "Heart", "Listen"];

const isAnagram = (str1, str2) => {
  return (
    str1.toLowerCase().split("").sort().join("") ===
    str2.toLowerCase().split("").sort().join("")
  );
};

router.post("/search", (req, res) => {
  const { input } = req.body;
  const found = strings.some((str) => isAnagram(str, input));
  res.json({ result: found });
});

module.exports = router;
