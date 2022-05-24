/********쿠키를 검사해서 처음인지 아닌지 구분*******/
let currentCookie = document.cookie;
let cookieCheck = document.cookie.indexOf("ABC");
console.log(cookieCheck);
if(cookieCheck > -1){
    document.querySelector(".notice").style.display = "none"
}else{
    document.querySelector(".notice").style.display = "block"
}

/****** 쿠키 생성하는 방법 ******/
let date = new Date(); // 현재 날짜를 date에 넣음
date.setDate(date.getDate() + 7); // 7일 이후의 날짜 생성

let setCookie = ""; // 쿠키에 넣을 변수 생성
setCookie += "cookieName = ABC;" // 쿠키에 넣을 이름, 값
setCookie += "exfires =" + date.toUTCString(); // 쿠키에 넣을 만료 될 날짜

document.cookie = setCookie; // 문서에 쿠키를 넣음
console.log(date);

/****** 쿠키 삭제하는 방법 ******/
//쿠키 삭제 방법은 쿠키생성코드에서 만기날짜를 현재 날짜의 전날로 설정하면 됨
function deleteCookie(){
    let date = new Date(); // 현재 날짜를 date에 넣음
    date.setDate(date.getDate() - 1); // 이전 날짜를 넣음

    let setCookie = ""; // 쿠키에 넣을 변수 생성
    setCookie += "cookieName = ABC;" // 쿠키에 넣을 이름, 값
    setCookie += "exfires =" + date.toUTCString(); // 쿠키에 넣을 만료 될 날짜

    document.cookie = setCookie; // 문서에 쿠키를 넣음
}

