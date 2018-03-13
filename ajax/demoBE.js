var http = require("http"); //获取http模块
function onRequest(req, res) { //定义服务器监听得到响应的函数
    var text = req.url.toString().split("=")[1];
    console.log("result-----------" + req.url.toString());
    console.log("text-----------" + text);
    res.writeHead(200, { "Content-Type": "text/plain", "Access-Control-Allow-Origin": '*' });
    res.write(text); //相当于页面的responseText
    res.end();
}
http.createServer(onRequest).listen(8888, function() { //createServer可以传入两个参数(req,res)
    console.log("listening................");
});