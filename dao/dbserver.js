const dbmodel = require("../model/dbmodel");
const bcrypt = require("./bcrypt");
const User = dbmodel.model("user");
const Friend = dbmodel.model("friend");
const Message = dbmodel.model("message");

const built = (data) => {
  return {
    errCode: 200,
    message: null,
    data: data,
  };
};

//新建用户
exports.createUser = ({ name, pwd }, res) => {
  let password = bcrypt.bcryption(pwd); // 加密密码
  const data = {
    name,
    pwd: password,
  };
  let user = new User(data);
  user.save((err, resp) => {
    if (err) {
      res.send({ status: 500, message: err });
    } else {
      res.json(built("success"));
    }
  });
};

// 查询用户
exports.findUser = ({ name, pwd }, res) => {
  User.findOne({ name }, (err, data) => {
    if (err) {
      res.send({ status: 500, message: err });
    } else {
      if (data && bcrypt.verification(pwd, data.pwd)) {
        res.json(built({ id: data._id }));
      } else {
        res.json(built("error"));
      }
    }
  });
};

// 发送消息
exports.sendMessage = (data, res) => {
  const { userID, friendID, message, messageType } = data;
  let _message = new Message({
    userID,
    friendID,
    message,
    messageType,
  });
  _message.save((err, resp) => {
    if (err) {
      res.send({ status: 500, message: err });
    } else {
      res.json(built("success"));
    }
  });
};
