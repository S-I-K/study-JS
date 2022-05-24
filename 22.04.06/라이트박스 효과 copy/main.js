document.addEventListener("click", lightbox);

function lightbox(e){
    e.preventDefault();
    let elem = e.target;
    let elemAttr = elem.getAttribute("data-lightbox");
    let lightbox = document.querySelector("#lightbox-overlay");
    let lightboxImg = document.querySelector("#lightbox-image");
    lightboxImg.setAttribute("src", elemAttr);
    console.log(lightboxImg);

    if(lightbox.classList.contains("visible")){
        lightbox.classList.remove("visible")
    }else{
        lightbox.classList.add("visible");
    }
}