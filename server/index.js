const express = require("express"); //express모듈가져옴
const app = express(); //function을 이용해서 express 앱 만들기
const port = 5000;
const { User } = require("./models/User");
const bodyParser = require("body-parser");
const config = require("./config/key");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const mongoose = require("mongoose");
mongoose
  .connect(config.mongoURI)
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("안녕하세요gg")); // 루트디렉토리에 오면 hello world 출력

app.post("/register", (req, res) => {
  //회원가입하때 필요한 정보들을 클라이언트에서 가져오면
  //그것들을 데이터베이스에 넣어준다
  const user = new User(req.body);

  user.save((err, userInfo) => {
    if (err) return res.json({ succsee: false, err });
    return res.status(200).json({ succsee: true });
  }); //save는 몽고db의 메소드, 정보들이 user모델에 저장
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`)); //포트번호에서 실행
