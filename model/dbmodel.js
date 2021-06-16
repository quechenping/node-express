const mongoose = require("mongoose");
const db = require("../config/db");
const Schema = mongoose.Schema;

// 用户表
const userSchema = new Schema({
  name: { type: "String" }, // 用户名
  pwd: { type: "String" }, // 密码
});

// 好友表
const friendSchema = new Schema({
  userID: { type: Schema.Types.ObjectId, ref: "user" }, // 用户id
  friendID: { type: Schema.Types.ObjectId, ref: "user" }, // 好友用户id
  name: { type: "String" }, // 用户名
  pwd: { type: "String" }, // 密码
});

// 好友消息表
const messageSchema = new Schema({
  userID: { type: Schema.Types.ObjectId, ref: "User" }, // 用户id
  friendID: { type: Schema.Types.ObjectId, ref: "User" }, // 好友用户id
  message: { type: "String" }, // 消息内容
  messageType: { type: "String" }, // 消息类型
});

module.exports = db.model("user", userSchema);
module.exports = db.model("friend", friendSchema);
module.exports = db.model("message", messageSchema);
