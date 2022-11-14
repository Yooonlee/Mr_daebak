"use strict";
//모듈
const express= require('express');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const PORT = 3000;
//라우팅
const home = require("./src/routes/home");

//앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(bodyParser.json());
// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(`${__dirname}/src/public`));

//리액트 라우팅
// app.get("/", function (req, res) {
//     res.sendFile(path.join(__dirname, "build/index.html"));
// __dirname: 현재 디렉토리 , "~" : 리액트에서 npm run build 후 해당 index.html(리액트는 여기서 라우팅 다 이루어짐)으로 이동
//   });

app.use("/", home); // home 경로에 가서 index.js의 코드를 실행,  라우팅



module.exports = app;
