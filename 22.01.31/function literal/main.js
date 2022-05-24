// ready() / load() 차이점
// ready() : DOM 객체만 로드되면 실행
// load() : 외부와 연동하는 소스가 로딩되면 실행
// ( ex: ifram img video src="")의 로딩이 끝나면 실행

// 리터럴 : 평소 변수 선언하는것처럼 쓰는 문법이
// 함수 리터럴이라고 함 (ex var Name = "김대식");
// 리터럴 방식말고 객체 방식도 있음
// 객체방식 : ex var Name = new String("김대식");

// 함수 리터럴 : 변수 리터럴과 같은 방식

function hi(name) {
    alert(name + "님 안녕하세요.");
}
hi("김대식");
// 함수 리터럴/변수에 함수를 대입함.
let hhi = hi;
hhi("김머식");