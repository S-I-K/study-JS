document.addEventListener("click", lightbox);

function lightbox(event) {
    event.preventDefault();
    let elem = event.target,
        elemAttr = elem.getAttribute("data-lightbox"),
        lightboxOverlay = document.querySelector("#lightbox-overlay"),
        lightboxImage = document.querySelector("#lightbox-image");
    console.log(elemAttr);

    if(!lightboxOverlay.classList.contains("visible")){
        lightboxOverlay.classList.add("visible");
        lightboxImage.setAttribute("src", elemAttr);
    }else{
        lightboxOverlay.classList.remove("visible");
    }
}