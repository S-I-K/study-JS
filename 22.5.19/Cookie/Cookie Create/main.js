/*
    Cookie 생성 or 수정
    document.cookie = "Name=값; Value=값; Expires=값"

    Date
    let date = new Date(); 현재 날짜를 반환 년/월/일/시/분/초
    date.getDate() 현재 일 을 반환
    date.getMonth() 현재 월 을 반환, 0~11

    date.setDate() 현재의 날짜를 재설정
*/

let date = new Date(); // 현재 날짜 반환
date.setDate(date.getDate() + 7); // 현재 날짜에서 7일 더한 값 반환

console.log(date);

let setCookie = ''; // 빈 변수 생성, 쿠키안에 넣어줄 용도
// setCookie = setCookie + 'CookieName=ABC;';
setCookie += 'CookieName=ABC;'; // 쿠키 Name=Value
setCookie += 'Expires='+date.toUTCString(); // 쿠키의 만기 날짜

document.cookie = setCookie; // 쿠키 생성