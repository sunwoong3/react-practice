const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true, //중간에 띄어쓰기 없애주는역할
    unique: 1, //이메일은 고유해야되니까 유니크
  },
  password: {
    type: String,
    maxlength: 5,
  },
  lastname: {
    type: String,
    maxlength: 50,
  },
  role: {
    //관리자인지 일반유저인지 등 구분해주고싶을때
    type: Number,
    default: 0, //입력하지않을경우 저절로 디폴트값메겨짐
  },
  image: String, //꼭 obj타입으로 작성하지 않아도됨
  token: {
    //나중에 유효성검사할때 사용
    type: String,
  },
  tokenExp: {
    //토큰유효기간
    type: Number,
  },
});

const User = mongoose.model("User", userSchema); //모델로 스키마를 감싸줌

module.exports = { User }; // 다른곳에서도 쓸수있게 export해줌
