const express = require("express");
const router = express.Router();
const fs = require("fs");
const constructor = require("../pageTemplateBuilder");

let indexPage = fs
  .readFileSync(__dirname.replace("index", "public\\views\\pages\\index.html"))
  .toString();

router.get("/", (req, res) => {
  res.send(constructor(indexPage));
});

module.exports = router;
