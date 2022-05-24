let btn = document.querySelector("#submit");

console.log(btn);

btn.addEventListener("click", function(){
    btn.style.color = "red";
    btn.classList.toggle("active");
});