/*
    아코디언 다 접기,
    아코디언 제목 클릭시 부모요소에게 active 클래스 추가
    부모가 active가 있다면 패널의 body가 나타나게,

    collapse all을 누르면 다 접게 하기
*/

let btnCollapse = document.querySelector("#btn-collapse"),
    heading = document.querySelectorAll(".panel-heading"),
    question = document.querySelectorAll(".panel-question"),
    answer = document.querySelectorAll(".panel-body");

console.log(heading);

// 제목을 클릭하면 할 일
for(let i=0; i<heading.length; i++){
    console.log(heading[i]);
    heading[i].addEventListener("click", function(ev){
        for(let j=0; j<heading.length; j++){
            question[j].classList.remove("active");
            ev.target.parentNode.classList.add("active");
            activateBody();
        }
    });
}

// panel-body 모두 안보이도록
function activateBody() {
    for(let x=0; x<answer.length; x++){
        answer[x].style.display = "none";
    }

    /*
        panel-question이 active가 있으면
        자식요소 panel-body가 나타나도록
    */
   let activePanel = document.querySelector(".panel-question.active .panel-body");
   activePanel.style.display = "block";
}
activateBody();

// collapse all 버튼 클릭시 모든 answer 안보이게
btnCollapse.addEventListener("click", function(){
    for(let i=0; i<answer.length; i++){
        answer[i].style.display="none";
    }
});