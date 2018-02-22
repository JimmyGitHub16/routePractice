var fs = require('fs');

function route(path, handle, res) {
        if(typeof handle[path] === 'function' ) {
            handle[path](res);
        } else {
            res.writeHead(200, {'Content-Type' : "html/text"});
            fs.createReadStream(__dirname+'/404.html', 'utf8').pipe(res);
        }
}

module.exports.route = route;