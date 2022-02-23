const express = require("express");
const app = express();
app.use(express.static("./public"));

const routes = require("./router");
const PORT = process.env.PORT || 5000;
app.use("/", routes);
app.listen(PORT, console.log(`Server started on port ${PORT}`));
