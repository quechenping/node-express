const express = require("express");
const cors = require("cors");
const router = require("./router/index");
const bodyParser = require("body-parser");
require("./server/websocket");

const port = 8000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 处理跨域
app.use(cors());

// 挂载路由
app.use("/", router);

// 处理404地址
app.use("*", function (req, res) {
  res.status(404);
  res.send("not Found");
});

app.listen(port, () => {
  console.log("服务已启动");
});
