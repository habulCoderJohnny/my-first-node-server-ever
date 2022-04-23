/* 
BASIC SERVER SETUP
1.create a folder (menually or mkdir)
2.open command line to that folder
3.npm init -y
--for Express--
4.npm i express/cors/mongobd
5.include in package.json
  "scripts": {
  "start": "node index.js",
  "start-dev": "nodemon index.js"
}
6.CREATE index.js file
OR/ 
go to express Documentory: https://expressjs.com/en/starter/installing.html
In index.js file:
const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
=========== 0  =========

FOR EXPRESS/NODE SERVER
1.require express
2.create app variable
3.declare port
4.set app.get(''/)
5.listen to port
6.node index.js
7.check ur browser for that port

=========== 0  =========
--GET--
1.CORS Installation: npm install cors [use middleware]
---POST--
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
=========== 0  =========

---Nodemon--- (for live)
nodemon Installation: npm install -g nodemon (onetime)
*/