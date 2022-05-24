const links = document.querySelectorAll(".container a");
const bg = document.querySelector(".bg");
const showClass = "bg-show";

for(const link of links){
    /*
    const img = new Image();
    img.src = link.dataset.bg; //.getAttribute("data-bg")와 같음
    console.log(img);
    */

    link.addEventListener("mouseenter", function(){
        document.body.classList.add(showClass);
        bg.style.backgroundImage = `url(${this.dataset.bg})`;
    });
    link.addEventListener("mouseleave", function(){
        document.body.classList.remove(showClass);
    });
}//for end