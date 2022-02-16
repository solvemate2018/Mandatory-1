const express = require("express");
const app = express();
app.set("view engine", "ejs");

const routes = require("./router");
const PORT = process.env.PORT || 5000;
app.use(express.static("./public"));
app.use("/", routes);
app.listen(PORT, console.log(`Server started on port ${PORT}`));
