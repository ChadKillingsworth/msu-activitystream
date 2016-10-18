const connect = require('connect');
const serveStatic = require('serve-static');
const http = require('http');

// Serve up public/ftp folder
var serve = serveStatic(__dirname, {'index': ['index.html', 'index.htm']});

// Create server
var server = http.createServer((req, res) => {
  serve(req, res, () => {});
}).listen(8000);
