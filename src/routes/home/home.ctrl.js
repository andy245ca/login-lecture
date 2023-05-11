"use strict";

const hello = (req, res) => {
    res.render("home/index"); //뷰 폴더를 설정해놓았기에 홈/인덱스, 디폴드 뷰엔진이 ejs라서 파일명을 안적음
};

const login = (req, res) => {
    res.render("home/login"); //같은 이유로 안적음
};

module.exports = {
    hello,
    login,
};