// 처리부분
function calcu(num1, op, num2, callback){
    let result = "";

    if(op == "+") {
        result = num1+num2;
    }else if(op == "-") {
        result = num1-num2;
    }else if(op == "*") {
        result = num1*num2;
    }else if(op == "/") {
        result = num1/num2;
    }else{
        result = console.log(" ㄴㄴ ");
    }
    // return이랑 동일 성능
    callback(result);
}
// 구현부분
function print1(result) {
    console.log("두 수의 합계는 :"+result+"입니다.");
}

// 호출
calcu(10,"+",20,print1);