let text = document.querySelector("p");
let list = document.querySelectorAll(".list");
let parag = document.querySelectorAll("p");

console.log(parag);

text.style.color = "red";
text.style.fontWeight = "bold";
list[0].style.visibility = "hidden";

for(i=0; i <= parag.length; i++){
    parag[i].style.color = "red";
}