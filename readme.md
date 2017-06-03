NOTES on Node.js

I installed the node_modules via command (after installing Node.JS from nodejs.org):

        npm install -g express

        npm init  -- this created my package.json file
        npm install path -g
        npm install path --save //saves it to package.json
        npm install open -g
        npm install open --save //saves it to package.json

=================================================================

NOTES: installing the base Node.JS app (via package), it created this in my "set path" pathing:
      c:Program Files\nodejs\;

Running the "npm install express" added this similarly to my "set path" setting:
      c:\users\3estyp001\AppData\Roaming\npm;

==================================================================

I then created a web-server app in subfolder "Web_Server", which is launched by running actively the following command:

        Node  Web_Server\srcServer.js

Note that the above sits on my package.json file so I can just start up the dev environment with command: npm start

  "scripts": {
    "start": "Web_Server/srcServer.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  }

==================================================================
