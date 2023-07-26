require("dotenv").config();
const express = require("express");
const connectTodb = require("./config/db");
const UserRoutes = require("./routes/userRoutes");
const app = express();
const path = require("path");

//middleware
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.static(path.join(__dirname, "./frontend/build")));

connectTodb();

app.use("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./frontend/build/index.html"));
});
app.use("/", UserRoutes);

module.exports = app;
