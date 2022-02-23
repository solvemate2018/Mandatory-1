const express = require("express");
const router = express.Router();
const fs = require("fs");
const constructor = require("../pageTemplateBuilder");

let terminalPage = fs
  .readFileSync(
    __dirname.replace(
      "terminal",
      "public\\views\\pages\\terminalDocumentation.html"
    )
  )
  .toString();

router.get("/", (req, res) => {
  res.send(constructor(terminalPage));
});

module.exports = router;
