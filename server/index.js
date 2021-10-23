const express = require('express'); //express모듈가져옴
const app = express(); //function을 이용해서 express 앱 만들기
const port = 5000;

const mongoose = require('mongoose');
mongoose
	.connect('mongodb+srv://sunwoo:poiu8523@sunwoo.76xpd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
	.then(() => console.log('MongoDB Connected...'))
	.catch((err) => console.log(err));

app.get('/', (req, res) => res.send('안녕하세요')); // 루트디렉토리에 오면 hello world 출력

app.listen(port, () => console.log(`Example app listening on port ${port}!`)); //포트번호에서 실행
