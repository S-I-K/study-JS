let fruits = ["apple", "orange", "cherry"];

// for
for(let i=0; i<fruits.length; i++){
    document.querySelector("#for").innerHTML += "<li>"+fruits[i]+"</li>";
}

// forEach
fruits.forEach(function(item, index){ //item이나 index로 배열안의 요소를 선택하여 반복
    document.querySelector("#foreach").innerHTML += "<li>"+fruits[index]+"</li>";
});

// for of
let item;
for (item of fruits){ //fruits 배열의 요소 하나하나를 item 변수에 지정 후 그것들 마다 할 일
    document.querySelector("#forof").innerHTML += "<li>"+item+"</li>";
}

// for in
let person = {
    pname : "홍길동",
    page : "200",
    pgender : "남성"
};
let x;
for(x in person) {
    document.querySelector("#forin").innerHTML += "<li>"+x+":"+ person[x] +"</li>";
}