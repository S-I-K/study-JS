let slide = document.querySelectorAll(".slide");
let labels = document.querySelectorAll("label");
let slider = document.querySelector(".slider");
let slideSize = window.innerWidth;
let slideWrapper = document.querySelector(".slideWrapper");
console.log(slideSize);

// labels 클릭시 slide 이동
for(let i=0; i<labels.length; i++){
    labels[i].addEventListener("click", function(){
        slideWrapper.style.left = -slideSize * i +"px";
        if(!this.classList.contains("active")){
            for(let j=0; j<labels.length; j++){
                labels[j].classList.remove("active");
            }
            this.classList.add("active");
        }
    });
}

document.addEventListener("resize", resizeFunc);

function resizeFunc(){

}