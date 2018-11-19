const express = require('express');
const app = express();
const https = require('https');
const path = require('path');
const fs = require('fs');
const PORT = 80;

app.use(express.static('public'));

app.get('/', function (req, res) {

});

const serverOptions = {
    key: fs.readFileSync(path.join(__dirname, 'cert', 'localhost.key')),
    cert: fs.readFileSync(path.join(__dirname, 'cert', 'localhost.cert'))
}

const server = https.createServer(serverOptions, app);
server.listen(PORT, function() {
    console.log("Server listening on port " + PORT);
})