
const usersRouter = require('./routes/users');
const postsRouter = require('./routes/posts');

const db = require('./db/index');

const express = require("express");

const bodyParser = require('body-parser')

const app = express();

app.all("*", function (req, res, next) {
	res.header( 'Access-Control-Allow-Origin', '*' );
	res.header('Access-Control-Allow-Credentials', 'true');
	res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
	res.header('Access-Control-Expose-Headers', 'Content-Length');
	res.header('Access-Control-Allow-Headers', 'Accept,Content-Type,X-Requested-With, Range');
	next();
});

// extended: false 方法内部使用querystring模块处理请求参数的格式
// extended: true 方法内部使用第三方模块qs处理请求参数的格式

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
app.use(express.static('./server'))

//用户
app.use('/users', usersRouter);

app.use('/posts', postsRouter);

app.use(function (req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	res.send('404');
});

// error handler
app.use(function (err, req, res, next) {
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};
	res.status(err.status || 500);
	res.send('error');
});


app.listen(8000);