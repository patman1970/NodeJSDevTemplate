var gulp = require("gulp"),
    nodemon = require("gulp-nodemon");

/* This gulp task notices that the services
   are restarted and recompiles the web-server
   start-file automatically for us. */
gulp.task("default", function() {
    nodemon({
      script: "./Web_Server/srcServer.js",
      ext: "js",
      env: {
        PORT: 3000 //match dev srcServer.js
      },
      ignore: ["./node_modules/**"]
    })
    .on("restart", function() {
      console.log("Server is restarting via Gulp!");
    })
});
