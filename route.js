var fs = require('fs');

function route(path, handle, res, params) {
    if (typeof handle[path] === 'function') {
        handle[path](res, params);
    } else {
        res.writeHead(200, { 'Content-Type': "html/text" });
        fs.createReadStream(__dirname + '//pages//404.html', 'utf8').pipe(res);
    }
}

module.exports.route = route;