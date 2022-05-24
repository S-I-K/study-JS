// 쿠키 생성하는 방법
let date = new Date(); // 현재 날짜를 date에 넣음
date.setDate(date.getDate() + 7); // 7일 이후의 날짜 생성

let setCookie = ""; // 쿠키에 넣을 변수 생성
setCookie += "cookieName = ABC;" // 쿠키에 넣을 이름, 값
setCookie += "exfires =" + date.toUTCString(); // 쿠키에 넣을 만료 될 날짜

document.cookie = setCookie; // 문서에 쿠키를 넣음


console.log(date);