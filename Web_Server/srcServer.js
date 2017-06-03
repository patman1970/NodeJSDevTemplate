var express = require("express");
var libPath = require("path");  //used to navigate to sub-dirs
var libOpen = require("open");  //used to open files
var nListenPort = 3000;

//This launches the web-server using the Node.js engine:
var app = express();

app.listen(nListenPort, function(err) {
  if (err) {
    console.log(err);
  } else {
    libOpen("http://localhost:" + nListenPort);
  };
});

app.get("/", function(req, res) {
  //When someone access to ROOT of this web-site, execute this function:

  //note: __dirname is a global by express on current Path:
  res.sendFile(libPath.join(__dirname, "../wwwRoot/index.html"));

  //These three lines are just a pre-test of the "express" lib:
  //var sCGI = req.query.toString();
  //var sHTML = GetTestOutput(sCGI);
  //res.send(sHTML);
});

function GetTestOutput(psCGI) {
  var sRet = "<html><head><title>Node JS Hello World</title></head><body>Hello, World!";
  if (psCGI.length > 0) sRet += "<br />You sent CGI: " + psCGI;
  sRet += "<br />\n";
  sRet += "</body></html>";
  return sRet;
}

console.log("Web-server ready on http://localhost:3000...");
console.log("Hit Ctrl-C in this command window to stop...");
