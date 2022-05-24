// ecma2016, const,let, `, =>

const target = document.querySelector(".target");
const links = document.querySelectorAll(".mynav a");
const colors = ["black", "orange", "darkblue", "green", "yellow"];

console.log(links);


for(let i=0; i<links.length; i++){
    // 링크들의 기본 옵션을 제거
    links[i].addEventListener("click", function(e){
        e.preventDefault();
    });

    // 마우스가 hover 됐을때 할일
    links[i].addEventListener("mouseenter", mouseenterFunc);
}




// mouseEnter Function
function mouseenterFunc(){
    if(!this.parentNode.classList.contains("active")){
        //마우스가 올라가지 않은 다른 메뉴들이 할일
        for(let i=0; i<links.length; i++){
            if(links[i].parentNode.classList.contains("active")){
                links[i].parentNode.classList.remove("active");
            }
            links[i].style.opacity = 0.25;
        }

        //마우스가 올라온 요소가 할일
        this.parentNode.classList.add("active");
        this.style.opacity = "1";

        const width = this.getBoundingClientRect().width; //요소의 넓이
        const height = this.getBoundingClientRect().height; //요소의 높이
        const left = this.getBoundingClientRect().left + window.pageXOffset; //요소의 왼쪽에서부터의 좌표값
        const top = this.getBoundingClientRect().top + window.pageYOffset; //요소의 위에서부터의 좌표값
        const color = colors[Math.floor(Math.random()*links.length)];

        console.log(color);
        // target의 모양 잡아주기
        target.style.width = `${width}px`;
        target.style.height = `${height}px`;
        target.style.left = `${left}px`;
        target.style.top = `${top}px`;
        target.style.borderColor = color;
        console.log(color);
    }
}

// resizeFunction
function resizeFunc(){
    const active = document.querySelector(".mynav li.active");
    if(active){
        const left = active.getBoundingClientRect().left + window.pageXOffset;
        const top = active.getBoundingClientRect().top + window.pageYOffset;

        target.style.left = `${left}px`;
        target.style.top = `${top}px`;
    }
}

window.addEventListener("resize", resizeFunc);