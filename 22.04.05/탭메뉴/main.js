/* 
    링크를 클릭하면 클릭한 그 요소의
    href 속성 값을 변수 tabTarget에 저장,
    저장된 값에서 #을 삭제.
*/

let targetLink = document.querySelectorAll(".tab-menu a");
let tabContent = document.querySelectorAll("#tab-content > div");

for(let i=0; i<targetLink.length; i++){
    targetLink[i].addEventListener("click", function(e){
        e.preventDefault();
        let orgTarget = e.target.getAttribute("href");
        let tabTarget = orgTarget.replace("#", "");

        for(let j=0; j<tabContent.length; j++){
            tabContent[j].style.display="none";
        }
        document.getElementById(tabTarget).style.display = "block";

        for(let x=0; x<targetLink.length; x++){
            targetLink[x].classList.remove("active");
            e.target.classList.add("active");
        }

        console.log(tabTarget);
    });
}

document.getElementById("tabs-1").style.display = "block";
