const express = require("express");
const router = express.Router();
const fs = require("fs");
const constructor = require("../pageTemplateBuilder");

let nodePage = fs
  .readFileSync(
    __dirname.replace("node", "public\\views\\pages\\nodeDocumentation.html")
  )
  .toString();

router.get("/", (req, res) => {
  res.send(constructor(nodePage));
});

module.exports = router;
