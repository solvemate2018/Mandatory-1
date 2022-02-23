const express = require("express");
const router = express.Router();
const fs = require("fs");
const constructor = require("../pageTemplateBuilder");

let sequelizePage = fs
  .readFileSync(
    __dirname.replace(
      "sequelize",
      "public\\views\\pages\\sequelizeDocumentation.html"
    )
  )
  .toString();

router.get("/", (req, res) => {
  res.send(constructor(sequelizePage));
});

module.exports = router;
