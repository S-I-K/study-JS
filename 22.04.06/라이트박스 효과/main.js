document.addEventListener("click", lightbox);

function lightbox(event){
    let elem = event.target, // 클릭한 그 요소를 elem에 저장
        elemId = elem.getAttribute("id"), // 클릭한 요소의 id명 저장 
        lightBoxImg = document.querySelector("#lightbox-image"),
        lightbox = document.querySelector("#lightbox-overlay"),
        newImg = new Image();
        /*
        새로운 이미지 요소 생성
        *src가 없으면 이미지가 생성 안되기 때문에
        임의로 하나 만들어줬음
        */
        
        if(elem.hasAttribute("data-lightbox")){
            event.preventDefault();

            newImg.onload = function(){ // 이미지가 로드가 되면
                lightBoxImg.src = this.src; // 새로 생성된 이미지 src에 빈 속성 넣음 *this는 newImg임
            }

            newImg.src = elem.getAttribute("data-lightbox");
            lightbox.classList.add("visible");
        }
        if(elemId == "lightbox-overlay" || elemId == "lightbox-image"){
            lightbox.classList.remove("visible");
        }
}