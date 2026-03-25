const { render } = require("ejs");
const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "public/assets")));
app.use(express.static(path.join(__dirname, "public/style")));
app.use(express.static(path.join(__dirname, "public/app")));

app.listen(port, () => {
  console.log(`server is runner on port ${port}`);
});

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/home.ejs", (req, res) => {
  res.render("home");
});
