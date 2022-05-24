const tabMenu = document.querySelectorAll(".tab-menu li");
const tabContent = document.querySelectorAll("#tab-content > div");
const highLight = document.querySelector(".highlight");

console.log(tabMenu);

tabMenu.forEach(function(item, idx){
    item.addEventListener("click", function(e){
        e.preventDefault();
        Showcontent(idx);
        MovehighLight(idx);
    });
});

function Showcontent(num){
    tabContent.forEach(function(item){
        item.style.display = "none";
    });
    tabContent[num].style.display = "block";
}

function MovehighLight(num){
    const newLeft = tabMenu[num].offsetLeft;
    const newWidth = tabMenu[num].offsetWidth;
    highLight.style.left = newLeft+'px';
    highLight.style.width = newWidth+'px';
}