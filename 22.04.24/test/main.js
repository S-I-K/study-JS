const slide = document.querySelectorAll(".slide");
const btn = document.querySelectorAll(".btn a");
console.log(btn);

for(let i=0; i<btn.length; i++){
    btn[i].addEventListener("click", function(e){
        e.preventDefault();
        console.log(this);

        slide[i].style.left = -100 * i + "%";
    })
}