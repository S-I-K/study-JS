let a = 10;
let b = 20;

function add(x,y){
    let sum = x + y;
    // sum안에 x와 y가 하는 일을 집어넣음
    return sum;
    // x,y의 할일이 들어있는 sum을 함수 내에서 출력?
}

console.log(add(a,b));


// 객체 Object
let baby = {
    name: "hoo",
    age: "5살",
    birthday: "5월 5일",
    getName: getName //1
}
//2
function getName(){
    return this.name;
}
//3
let aname = getName()
//4
console.log(aname);