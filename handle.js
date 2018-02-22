var fs = require('fs');

function onHome(res) {
    res.writeHead(200,{'Content-Type' :'text/html'});
    fs.createReadStream(__dirname +'\\index.html','utf8').pipe(res);
}

function onSearch(res) {
    /**
     * response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
     */
    res.writeHead(200,{'Content-Type' :'text/html'});
    fs.createReadStream(__dirname +'\\search.html','utf8').pipe(res);
}

function onCatString(res) {
    res.writeHead(200,{'Content-Type' :'text/html'});
    fs.createReadStream(__dirname +'\\api\\catstring.html','utf8').pipe(res);
}

function onJson(res) {
    res.writeHead(200,{'Content-Type' :'text/html'});
    var obj = {
        name: 'hellow node js route'
    };
    res.end(JSON.stringify(obj));
}

module.exports = {
home: onHome,
search: onSearch,
jsonValue: onJson,
catString: onCatString
};