var startServer = require('./server');
var handler = require('./handle');
var route = require('./route');

var handle = {};
handle['/'] = handler.home;
handle['/home'] = handler.home;
handle['/search'] = handler.search;
handle['/process'] = handler.search;
handle['/process_get'] = handler.process_get;
handle['/myjson'] = handler.jsonValue;
handle['/api/catstring'] = handler.catString;
handle['/ajax1'] = handler.onAjax;

startServer.startserver(route.route, handle);

function printGobj(name) {
    console.log(global[name]);
}

global.fish = 'foo';
global.dog = 'dog';
printGobj("fish");
printGobj("dog");