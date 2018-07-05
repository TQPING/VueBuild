var express = require("express");
var app = express();
var mysql = require("mysql");

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	port: '3306',
	database: 'test'
});
connection.connect();

//设置跨域访问
app.all('*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
});
var result = {
	"status": "200",
	"message": "success",
}

//查询语句
var statement = 'SELECT * FROM test where name like "json"';


connection.query(statement, function(error, results, fields) {
	if(error) throw error;
	console.log(results);
	return result.data = results;
});
//关闭数据库
connection.end();

app.get("/", function(req, res) {
	res.status(200);
	res.json(result)
	//res.send(req.body);
});
/*app.get("/app/:id", function(req, res) {
	res.send("the name of " + req.params.id);
});
app.get("/query", function(req, res) {
	console.log(req.query);
	res.send(req.query);
});*/

//配置服务端口
var server = app.listen(3000, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log('Example app listening at http://:', host, port);
})