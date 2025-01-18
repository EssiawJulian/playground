const fs = require("fs");
const path = require("path");
const http = require("http");
const { error } = require("console");

const homepage = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      // fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
      //   if (err) throw err;
      //   res.writeHead(200, { "Content-Type": "text/html" });
      //   res.end(data);
      // });
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
