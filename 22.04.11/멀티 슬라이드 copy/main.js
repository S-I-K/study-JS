let slide = document.querySelector(".slides"),
    slides = document.querySelectorAll(".slides li"),
    slideWidth = 300,
    slideMargin = 30,
    slideCount = slides.length,
    currentIdx = 0,
    next = document.querySelector(".next"),
    prev = document.querySelector(".prev");

    console.log(slideCount);

    // 슬라이드의 갯수에 따라 넓이 값 변경
    slide.style.width = (slideWidth + slideMargin) * slideCount - slideMargin + "px";

    function moveSlide(num){
        slide.style.left = -num * 330 + "px";
        currentIdx = num;
    }

    next.addEventListener("click", function(e){
        e.preventDefault();
        if(currentIdx < slideCount-3){
            moveSlide(currentIdx + 1);
        }else{
            moveSlide(0);
        }
    });
    prev.addEventListener("click", function(e){
        e.preventDefault();
        if(currentIdx > 0){
            moveSlide(currentIdx - 1);
        }else{
            moveSlide(slideCount-3);
        }
    });