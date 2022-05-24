let btn = document.querySelector(".btn"),
    docEl = document.documentElement,
    offset,
    scrollPos,
    docHeight;

console.log(docEl);

// 문서 높이 계산하기
// docHeight = docEl.scrollHeight, offsetHeight;
docHeight = Math.max(docEl.scrollHeight, docEl.offsetHeight);

if(docHeight != 0 ){
    offset = docHeight / 4;
}

// 스크롤 이벤트 추가
window.addEventListener("scroll", function(){
    scrollPos = docEl.scrollTop;
    console.log(scrollPos);
    if(scrollPos > offset){
        btn.classList.add("visible");
    }else{
        btn.classList.remove("visible");
    }
});

// 클릭 이벤트 추가
btn.addEventListener("click", function(e){
    e.preventDefault();
    scrollToTop();
    
});
function scrollToTop(){
    let scrollInterval = setInterval(function(){
        if(scrollPos != 0){
            window.scrollBy(0,-80);
        }else{
            clearInterval(scrollInterval);
        }
    },15);
}


/*
        ****SCROLL METHOD****
    .scrollTop
    해당 요소의 스크롤을 반환
    .scrollTop = px;
    해당 요소의 스크롤 설정?..
    .scrollBy(x,y);
    스크롤을 더하거나 빼서 이동시킬수 있음

        ****높이 구하는 방법!****
    .scrollHegiht / .offsetHeight
    두개가 같은 역할이지만 값이 다를 경우가 있으므로
    Math.max() 를 이용해서 높은 값을 도출

        ****문서 자체의 높이****
    document.documentElement;
    이거슨 문서 자체의 높이를 구할때 사용
*/