let header = document.querySelector("header"),
    mainMenuList = document.querySelectorAll(".mainmenu > li");
    subMenu = document.querySelectorAll(".submenu"),
    headerHeight = header.offsetHeight,
    subMenuHeight = 0;

/*
let B = A.offsetHeight; // border까지의 높이,
let B = A.clientHeight; // padding까지의 높이
*/

//subMenuHeight에 subMenu중 가장 높이가 큰 요소 값 저장
// for(let i=0; i<subMenu.length; i++){
//     if(subMenu[i].offsetHeight > subMenuHeight){
//         subMenuHeight = subMenu[i].offsetHeight;
//     }
// }

/*
mainMenuList에 마우스 올리면 header 높이를
headerHeight와 subMenuHeight를 더한 높이로 변경,
mainMenuList에 마우스가 나가면 headerHeight로 변경;
*/
for(let i=0; i<mainMenuList.length; i++){
    mainMenuList[i].addEventListener("mouseenter", function(){
        subMenuHeight = this.querySelector("ul").offsetHeight;
        header.style.height = headerHeight + subMenuHeight + "px";
    });
    mainMenuList[i].addEventListener("mouseleave", function(){
        header.style.height = headerHeight+"px";
    });
}

console.log(headerHeight);