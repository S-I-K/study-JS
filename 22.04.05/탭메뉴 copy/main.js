let tabMenu = document.querySelectorAll(".tab-menu li a");
let tabContent = document.querySelectorAll("#tab-content div");
// console.log(tabContent);

for(let i=0; i<tabMenu.length; i++){
    tabMenu[i].addEventListener("click", function(e){
        e.preventDefault();
        // 1. 속성값 가져오기, 속성값 특정 문자열 바꾸기
        let orgTabAtt = e.target.getAttribute("href");
        let TabAtt = orgTabAtt.replace("#", "");
        console.log(TabAtt);
        
        // 2. content 안보이게하고 속성값을 받아와서 보이게 하기
        for(let j=0; j<tabContent.length; j++){
            tabContent[j].style.display="none";
        }
        document.querySelector(orgTabAtt).style.display = "block";

        // 3. a태그의 클래스를 전부 지우고,
        // 클릭한 요소만 클래스 추가
        for(let x=0; x<tabMenu.length; x++){
            tabMenu[x].classList.remove("active");
            e.target.classList.add("active");
        }
    })
}
// 웹 페이지 시작시 열려있게
document.querySelector("#tabs-1").style.display = "block";