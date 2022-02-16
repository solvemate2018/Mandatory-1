const express = require("express");
const router = express.Router();

const terminal = require("./terminal/terminalRouter");
router.use("/terminal", terminal);

const nodePackages = require("./node/nodeRouter");
router.use("/node", nodePackages);

const sequelize = require("./sequelize/seuelizeRouter");
router.use("/sequelize", sequelize);

const defaultPage = require("./index/index");
router.use("/", defaultPage);

router.use(express.json());

module.exports = router;
