const express = require("express");
const router = express.Router();
const signUp = require("../server/signup");
const send = require("../server/send");

router.get("/", (req, res) => {
  res.send(`hello,world`);
});

// 登陆
router.post("/loginUp", (req, res) => {
  signUp.loginUp(req, res);
});

// 注册
router.post("/signUp", (req, res) => {
  signUp.signUp(req, res);
});

// 发送消息
router.post("/sendMessage", (req, res) => {
  send.sendMessage(req, res);
});

module.exports = router;
