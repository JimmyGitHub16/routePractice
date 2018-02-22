var startServer = require('./server');
var handler = require('./handle');
var route = require('./route');

var handle = {};
handle['/'] = handler.home;
handle['/home'] = handler.home;
handle['/search'] = handler.search;
handle['/myjson'] = handler.jsonValue;
handle['/api/catstring'] = handler.catString;

startServer.startserver(route.route,handle);