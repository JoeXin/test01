const express = require("express"); //引入express模块
const path = require("path"); //引入path模块

const app = new express(); //创建一个express实例

app.use(express.static(path.join(__dirname, "../build"))); //监听build文件夹下的文件

//监听8080端口
app.listen(8080, function() {
  console.log(path.join(__dirname, "../build"));
  console.log("服务器已启动");
});