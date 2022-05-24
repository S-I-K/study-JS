let mainMenu = document.querySelectorAll(".mainmenu > li"),
    subMenu = document.querySelectorAll(".submenu"),
    subMenuHeight = 0,
    header = document.querySelector("header"),
    headerHeight = header.offsetHeight;

for(let i=0; i<mainMenu.length; i++){
    mainMenu[i].addEventListener("mouseenter", function(){
        subMenuHeight = this.querySelector("ul").offsetHeight;
        header.style.height = headerHeight + subMenuHeight + "px";
    });
    mainMenu[i].addEventListener("mouseleave", function(){
        header.style.height = headerHeight + "px";
    });
}