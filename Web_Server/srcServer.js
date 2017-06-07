var express = require("express");
var libPath = require("path");  //used to navigate to sub-dirs
var libOpen = require("open");  //used to open files
var nListenPort = 3000;
var sCurrentHost = "localhost";
var sCurrentDirName = __dirname; //this is part of Node.js env
var bOnDevEnvironment = true;
if (sCurrentDirName.toLocaleLowerCase().indexOf('develop') < 0)
{
  //NOTE: c:\develop\NodeJSDev is my current local dev path,
  //  so if I'm deployed to an external host, it not in dev:
  bOnDevEnvironment = false;
  console.log('Starting from root path: ' + sCurrentDirName);
};

if (bOnDevEnvironment == false) {
  //NOTE: This changed when running in C9.io (Cloud 9 space)
  nListenPort = process.env.PORT;
  sCurrentHost = process.env.IP;
};
//NOTE2: This is current registered at this site:
//    https://nodejsdev-patman1999.c9users.io

//This launches the web-server using the Node.js engine:
var app = express();
//This line allows this to be default 'path' for a request:
app.use(express.static(sCurrentDirName + "/wwwRoot"));

app.listen(nListenPort, function(err) {
  if (err) {
    console.log(err);
  } else {
    libOpen("http://" + sCurrentHost + ":" + nListenPort);
    console.log("Web server is running on port " + nListenPort);
  };
});

app.get("/", function(req, res) {
  //When someone access to ROOT of this web-site, execute this function:

  //note: __dirname is a global by express on current Path:
  res.sendFile(libPath.join(sCurrentDirName, "../wwwRoot/index.html"));

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
