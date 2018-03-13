var fs = require('fs');

function onHome(res, params) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(__dirname + '\\pages\\index.html', 'utf8').pipe(res);
}

function onSearch(res, params) {
    /**
     * response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
     */
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(__dirname + '\\pages\\search.html', 'utf8').pipe(res);
}

function onProcess_Get(res, params) {

    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Hello World");
    res.end();
}

function onCatString(res, params) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(__dirname + '\\pages\\api\\catstring.html', 'utf8').pipe(res);
}

function onAjax(res, params) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(__dirname + '\\pages\\Ajax1.html', 'utf8').pipe(res);
}

function onJson(res, params) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    /*  var obj = {
         name: 'hellow node js route'
     }; */
    res.end(JSON.stringify(params));
}

module.exports = {
    home: onHome,
    search: onSearch,
    jsonValue: onJson,
    catString: onCatString,
    process_get: onProcess_Get,
    onAjax: onAjax
};