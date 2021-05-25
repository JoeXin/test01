// 导入 mongoose 模块
const mongoose = require('mongoose');
// 设置默认 mongoose 连接
const mongoDB = 'mongodb://127.0.0.1/db_demo';

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

// 让 mongoose 使用全局 Promise 库
mongoose.Promise = global.Promise;

// 取得默认连接
const db = mongoose.connection;

db.on("error", function (error) {
	console.log("数据库连接失败：" + error);
});

db.on("open", function () {
	// console.log("------数据库连接成功！------");
});

module.exports = db;