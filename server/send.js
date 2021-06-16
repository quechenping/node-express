const dbserver = require("../dao/dbserver");
const server = require("./websocket");

// 发送信息
exports.sendMessage = (req, res) => {
  dbserver.sendMessage(req.body, res);
  console.log(req.body);
  server.clients.forEach((item) => {
    item.send(JSON.stringify(req.body));
  });
};
