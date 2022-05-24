var $menu1 = document.querySelectorAll('.menu1 li');
var $menu2 = document.querySelectorAll('.menu2 li');
var $menu3 = document.querySelectorAll('.menu3 li');
var $menu4 = document.querySelectorAll('.menu4 li');
//반복문을 이용하여 리스트의 색상을 blue로 변경한다.

// for 
for(let i=0; i<$menu1.length; i++){
    $menu1[i].style.color = "blue";
}

// forEach
$menu2.forEach(function(item, index){
    $menu2[index].style.color = "red";
});

//for in
let item;
for(item of $menu3){
    item.style.color = "green";
}

//do / while
