
const usersRouter = require('./routes/users');
const postsRouter = require('./routes/posts');

const db = require('./db/index');

const express = require("express");

const bodyParser = require('body-parser')

const app = express();

// extended: false 方法内部使用querystring模块处理请求参数的格式
// extended: true 方法内部使用第三方模块qs处理请求参数的格式
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.all("*", function (req, res, next) {
	//指定允许其他域名访问
	res.set("Access-Control-Allow-Origin", "http://localhost:3000");
	//是否允许后续请求携带认证信息（cookies）,该值只能是true,否则不返回
	res.set("Access-Control-Allow-Credentials", "true");
	res.set("Access-Control-Allow-Methods", "*");
	// res.set("Access-Control-Allow-Headers", "Content-Type,Access-Token");
	res.set("Access-Control-Expose-Headers", "*");
	next();
});
//用户
app.use('/users', usersRouter);

app.use('/posts', postsRouter);

app.listen(8000);