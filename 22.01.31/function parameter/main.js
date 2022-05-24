// 일반적인 함수 선언
function hi() {
    alert("안녕");
}
function bye() {
    alert("잘가");
}
// 매개변수를 이용한 함수 선언
function hibye(hb) {
    hb();
    // 함수 안에서 매개변수 호출
}

// 매개변수란에 함수명 작성하여 호출
// hb = hi() 와 같음
// hb = bye() 와 같음
hibye(hi);
hibye(bye);