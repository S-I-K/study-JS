// 변수 선언
let btn = document.querySelector(".btn"),
    docEl = document.documentElement,
    docHeight = Math.max(docEl.scrollHeight, docEl.offsetHeight),
    offset,
    scrollPos;

    console.log();
// 문지방 threshold 설정
if(docHeight != 0) {
    offset = docHeight/4;
}

// scroll Event
window.addEventListener("scroll", function(){
    scrollPos = docEl.scrollTop;
    if(scrollPos > offset) {
        btn.classList.add("visible");
    }else{
        btn.classList.remove("visible");
    }
});

// click Event
btn.addEventListener("click", function(e){
    e.preventDefault();
    scrollToTop();
});

// scroll양을 일정 시간마다 -80씩 빼는 함수
function scrollToTop(){
    let scrollInterval = setInterval(function(){
        if(scrollPos != 0) {
            window.scrollBy(0, -80);
        }else{
            clearInterval(scrollInterval);
        }
    },15);
}