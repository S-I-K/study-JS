let slides = document.querySelector(".slides"),
    slide = document.querySelectorAll(".slides li"),
    currentIdx = 0,
    slideCount = slide.length,
    prevBtn = document.querySelector(".prev"),
    nextBtn = document.querySelector(".next"),
    slideWidth = 300,
    slideMargin = 30;

console.log(slideCount);
slides.style.width = (slideWidth + slideMargin) * slideCount - slideMargin + "px";


function moveSlide(num){
    slides.style.left = -num * 330 + "px";
    currentIdx = num;
}

nextBtn.addEventListener("click", function(e){
    e.preventDefault();
    if(currentIdx < slideCount-3){
        moveSlide(currentIdx + 1);
        console.log(currentIdx);
    }else{
        moveSlide(0);
    }
});

prevBtn.addEventListener("click", function(e){
    e.preventDefault();
    if(currentIdx > 0){
        moveSlide(currentIdx - 1);
        console.log(currentIdx);
    }else{
        moveSlide(slideCount-3);
    }
});