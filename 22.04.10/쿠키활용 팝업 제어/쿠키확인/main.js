let currentCookie = document.cookie;
let cookieCheck = document.cookie.indexOf("ABC");

console.log(cookieCheck);

if(cookieCheck > -1){
    document.querySelector(".notice").style.display = "none"
}else{
    document.querySelector(".notice").style.display = "block"
}