/** 
const fs = require("fs");
const path = require("path");
const http = require("http");
const { error } = require("console");

const homepage = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      navPage("index.html", res);
      break;
    case "/about":
      navPage("about.html", res);
    case "/contact-me":
      navPage("contact-me.html", res);
    default:
      navPage("404.html", res);
  }
});

const navPage = (fileName, res) => {
  fs.readFile(path.join(__dirname, fileName), (err, data) => {
    if (err) throw err;
    res.writeHeader(200, { "Content-Type": "text/html" });
    res.end(data);
  });
};

homepage.listen(8000);
*/

// Now using Express.js
const path = require("path");
const express = require("express");
const PORT = 3000;

const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "about.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "contact-me.html"));
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "404.html"));
});

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Running on Port:${PORT}`);
});
