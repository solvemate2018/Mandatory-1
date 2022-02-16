const express = require("express");
const router = express.Router();
router.use(express.json());

router.get("/", (req, res) => {
  res.render("pages/nodeDocumentation.ejs");
});

module.exports = router;
