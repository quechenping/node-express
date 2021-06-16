const dbserver = require("../dao/dbserver");

// 用户注册
exports.signUp = (req, res) => {
  const { name, pwd } = req.body;
  dbserver.createUser({ name, pwd }, res);
};

// 用户登陆
exports.loginUp = (req, res) => {
  const { name, pwd } = req.body;
  dbserver.findUser({ name, pwd }, res);
};
