const imageList = document.querySelector(".image-list");
const btns = document.querySelectorAll(".view-options button");
const imageListItems = document.querySelectorAll(".image-list li");
const active = 'active';
const listView = 'list-view';
const gridView = 'grid-view';
const dNone = 'd-none';

// console.log(document.documentElement.style.width.valueOf);

//버튼 활성화
for(const btn of btns){
    btn.addEventListener('click', function(){
        const parent = this.parentElement;
        document.querySelector(".view-options .active").classList.remove(active);
        parent.classList.add(active);

        if(parent.classList.contains('show-list')){
            parent.previousElementSibling.previousElementSibling.classList.add(dNone);
            imageList.classList.remove(gridView);
            imageList.classList.add(listView);
        }else{
            parent.previousElementSibling.classList.add(dNone);
            imageList.classList.remove(listView);
            imageList.classList.add(gridView);
        }
    });
}

//리스트 너비 조절 Range
const rangeInput = document.querySelector(".zoom input");
rangeInput.addEventListener("change", function(){
    document.documentElement.style.setProperty('--minRangeValue', this.value+'px');
});

// search, 변수지정
const captions = document.querySelectorAll(".image-list figcaption p:first-child");
const myArray = [];
let counter = 1; //nth-child

// 빈 배열에 리스트안의 제목과 nth 번호를 추가
for(const caption of captions){
    myArray.push({
        id: counter++,
        text: caption.textContent
    });
}

const searchInput = document.querySelector('input[type="search"]');
const photosCounter = document.querySelector(".toolbar .counter span");

searchInput.addEventListener('keyup', keyupHandler);
function keyupHandler(){
    // keyup 이벤트 발생시 리스트 모두 안보이게
    for(item of imageListItems){
        item.classList.add(dNone);
    }
    const keywords = this.value; //사용자의 입력값을 변수에
    const filteredArray = myArray.filter(function(el){
        return el.text.includes(keywords);
        //myArray안에 사용자의 입력값이 있으면 filteredArray에 0번째부터 추가
    });

    // filteredArray안에 값이 있다면,
    if(filteredArray.length > 0){
        for(const el of filteredArray){
            document.querySelector(`.image-list li:nth-child(${el.id})`).classList.remove(dNone);
            // 사용자가 입력한 값과 일치하는 녀석들을 nth를 이용해 filteredArray안의 요소의 id 번호를 가져와 d-None 클래스를 지워줌
        }
    }
    photosCounter.textContent = filteredArray.length;
    // photoTotal

    console.log(filteredArray);
}










/*  filter 사용법
    .filter(function(El, idx, array)){return ..;}
    필터를 사용할 array요소에 위와 같이 작성
    함수형식이며 매개변수와 return이 필수적

    const arr = [3,15,9,20,25];
    const arr2 = arr.filter(function(e){
        return e % 5 == 0;
    });

    console.log(arr2);
*/