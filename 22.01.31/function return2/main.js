// setInterval() : 타이머 함수, 정해진 시간동안
//                 반복적으로 코드 실행.
// ex) setInterval(반복할 코드, 시간); // 시간은 밀리 세컨드(ms)
// setInterval(function(){
//     document.write("웩<br>");
// }, 1000);

function hi() {
    function bye(name) {
        alert(name + "님 안녕하세요?");
    }
    // 외부 함수에서 리턴값으로 내부함수를 넘겨받음.
    return bye;
}

// result에 hi()를 저장한것이 아니라, 호출한것?..
// hi()의 결과값 즉 return 받은 값을 넘겨받은것.
let result = hi();
result("김대식");