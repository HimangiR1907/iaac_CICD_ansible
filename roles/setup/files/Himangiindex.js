var http = require("http");
var server = http.createServer(function (req, res) {
res.writeHead(800);
res.end("Hello Himangi world2222222222!");
});
server.listen(3000);
