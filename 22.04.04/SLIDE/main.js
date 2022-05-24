// 변수 지정
let sliderWrapper = document.querySelector(".container"),
    sliderContainer = document.querySelector(".slider-container"),
    slides = document.querySelectorAll(".slide"),
    slideCount = slides.length,
    currentIndex = 0,
    topHeight = 0,
    navPrev = document.querySelector("#prev"),
    navNext = document.querySelector("#next");

// 슬라이드의 높이 확인 후 부모의 높이로 지정
function calculateTallestSlide() {
    for(let i=0; i<slideCount; i++){
        if(slides[i].offsetHeight > topHeight) {
            topHeight = slides[i].offsetHeight;
        }
    }

    sliderWrapper.style.height = topHeight+"px";
    sliderContainer.style.height = topHeight+"px";
}
calculateTallestSlide();

// 슬라이드가 있으면 가로로 배열
for(let i=0; i<slideCount; i++){
    slides[i].style.left = i*100+"%";
}
// 슬라이드 이동 함수
function goToSlide(idx){
    sliderContainer.style.left = idx * -100+"%";
    sliderContainer.classList.add("animated");
    currentIndex = idx;

    // updateNav();
}

// 버튼기능 업데이트 함수
function updateNav(){
    // 처음일때
    if(currentIndex == 0){
        navPrev.classList.add("disabled");
    }else{
        navPrev.classList.remove("disabled");
    }
    // 마지막일때
    if(currentIndex == slideCount-1){
        navNext.classList.add("disabled");
    }else{
        navNext.classList.remove("disabled");
    }
}


// 버튼을 클릭하면 슬라이드 이동
navPrev.addEventListener("click", function(e){
    e.preventDefault();
    // goToSlide(currentIndex-1);
    // 처음이 아니라면 이전으로, 처음이 아니면 마지막으로
    if(currentIndex != 0){
        goToSlide(currentIndex-1);
    }else{
        goToSlide(slideCount-1);
    }

});
navNext.addEventListener("click", function(e){
    e.preventDefault();
    // goToSlide(currentIndex+1);
    if(currentIndex != slideCount-1){
        goToSlide(currentIndex+1);
    }else{
        goToSlide(0);
    }
});

// 첫번째 슬라이드 시작
goToSlide(0);