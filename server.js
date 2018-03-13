var http = require('http');
var url = require('url');
var createServer = http.createServer(onRequest);

function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    if (pathname === '/favicon.ico')
        return;
    console.log('request pathname is ' + pathname);

    // why Access-Control-Allow-Origin must set to *, otherwise client received response status != 200
    response.writeHead(200, { 'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*' });
    params = url.parse(request.url, true).query;
    var str = JSON.stringify(url.parse(request.url, true).query);
    console.log('response data is  ' + JSON.stringify(str));
    response.write(str);
    response.end();
}
createServer.listen(8088);
console.log('Server running at http://127.0.0.1:8088/');

// tmp comment to test nodejs+jqueryAjax
/* var http = require('http');
var url = require('url');
var util = require('util');
var querystring = require('querystring');

function startSvr(route, handle) {
    function onRequest(req, res) {
        console.log('receive request' + req.url);
        var pathname = url.parse(req.url).pathname;
        if (pathname === '/favicon.ico')
            return;
        console.log('request pathname is ' + pathname);
        var params = "";
        console.log('request whole message: ' + util.inspect(url.parse(req.url, true)));
        if (req.method === 'POST') {
            req.on('error', function(err) {
                console.log(err);
            });
            req.on('data', function(chunk) {
                params += chunk;
            });
            req.on('end', function() {
                route(pathname, handle, res, util.parse(params));
            });

        } else {
            params = url.parse(req.url, true).query;
            route(pathname, handle, res, params);
        }

    }

    http.createServer(onRequest).listen(8080, '127.0.0.1');
}

module.exports.startserver = startSvr; */