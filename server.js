var http = require('http');
var url = require('url');
var querystring = require('querystring');

function startSvr(route,handle) {
    function onRequest(req, res){
        console.log('receive request' + req.url);
        var pathname = url.parse(req.url).pathname;
        console.log('request path name is ' + pathname);
        route(pathname,handle,res);
    }

    http.createServer(onRequest).listen(8888,'127.0.0.1');
}

module.exports.startserver = startSvr;