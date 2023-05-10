"use strict";

//모듈
const express = require("express");
const app = express();

//set은 임의적인 속성설정 말고도 아래처럼 미리 정해진 주요속성이 존재함
//웹세팅 set함수에("views", "경로") => 뷰파일이 있는 경로를 설정
//마찬가지로 ("view engine", "확장자명")=>디폴트 뷰엔진(템플릿 역할)
app.set("views", "./views"); // "./" 현재 경로를 말함
app.set("view engine", "ejs");

//라우팅
const home = require("./routes/home")
app.use("/", home); // use -> 미들웨어를 등록해주는 메서드.

module.exports = app;