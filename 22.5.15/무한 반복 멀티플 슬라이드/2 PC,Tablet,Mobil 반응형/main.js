let slides = document.querySelector(".slides"),
    slide = document.querySelectorAll(".slides li"),
    currentIdx = 0;
    slideCount = slide.length,
    slideWidth = 200,
    slideMargin = 30,
    prevBtn = document.querySelector(".prev"),
    nextBtn = document.querySelector(".next");

    makeClone(); // 슬라이드를 복사, 너비지정, 위치지정

function makeClone(){ // slide의 clone요소를 생성, 너비변경 함수호출, 위치지정 함수호출
    // appendChild
    for(let i=0; i<slideCount; i++){
        let cloneSlide = slide[i].cloneNode(true); //slide[i]를 복사하여 cloneSlide에 저장
        cloneSlide.classList.add('clone'); //원본요소와 클론요소를 구분하기 위해 클론요소에 'clone' 클래스명 추가
        slides.appendChild(cloneSlide); //슬라이드의 마지막 요소 뒤에 cloneSlide 추가
    }
    // prepend
    for(let i=slideCount-1; i>=0; i--){
        let cloneSlide = slide[i].cloneNode(true);
        cloneSlide.classList.add('clone');
        slides.prepend(cloneSlide);
    }
    // 슬라이드의 새로운 너비값 구한 함수호출
    updateWidth();
    setInitialPos();
    setTimeout(function(){ // 배치가 완료 된 후 1초 뒤에 animated 추가
        slides.classList.add('animated');
    }, 100);
}

function updateWidth(){ // slide의 개수에 따라 slides의 너비값을 변경
    let currentSlide = document.querySelectorAll('.slides li');
    let newSlideCount = currentSlide.length;
    let newWidth = (slideWidth + slideMargin) * newSlideCount - slideMargin + 'px';
    slides.style.width = newWidth;
}

function setInitialPos(){ // slides의 원본을 화면에 보이는 위치로 변경
    let initalTranslateValue = -(slideWidth+slideMargin) * slideCount;
    slides.style.transform = 'translateX('+initalTranslateValue+'px)';
}

nextBtn.addEventListener('click', function(){
    moveSlide(currentIdx + 1);
    // left 값이 음수가 되어야 다음으로 이동됨
});
prevBtn.addEventListener('click', function(){
    moveSlide(currentIdx - 1);
    // left 값이 양수가 되어야 이전으로 이동됨
});

function moveSlide(num) {
    slides.style.left = -num * (slideWidth+slideMargin) + 'px';
    currentIdx = num;
    console.log(currentIdx, slideCount);
    if(currentIdx == slideCount || currentIdx == -slideCount){
    // slides의 위치가 마지막에 도달했을 때 원본 요소로 자연스럽게 이동하는 조건
        setTimeout(function(){
            slides.classList.remove('animated');
            slides.style.left = '0px';
            currentIdx = 0;
        }, 500);
        setTimeout(function(){
            slides.classList.add('animated');
        }, 550);
    }
}

slides.addEventListener('mouseenter', function(){
    stopSlide(); // 마우스가 들어오면 슬라이드 멈춤
});
slides.addEventListener('mouseleave', function(){
    autoSlide(); // 마우스가 나가면 슬라이드 자동재생
});

let timer = undefined;
function autoSlide(){
    if(timer == undefined){
        timer = setInterval(function(){
            moveSlide(currentIdx + 1);
        }, 3000); // 3초마다 moveSlide 실행
    }
}
function stopSlide(){
    clearInterval(timer);
    timer = undefined; // 마우스가 나갈때 다시 autoSlide가 작동할 수 있도록 값을 undefind로 바꿈
}