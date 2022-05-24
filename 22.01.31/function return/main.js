// btn에 사용할 함수 선언
function morning() {
    alert("좋은 아침,,,,");
}

// btn에 클릭 이벤트를 넣고 이벤트 속성값으로
// 함수를 사용하였음. 결과적으로 return값이 함수인 셈이다.
$(document).ready(function(){
    $(".btn").on("click", morning);
});