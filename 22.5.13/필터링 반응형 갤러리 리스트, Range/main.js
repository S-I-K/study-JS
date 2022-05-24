const imageList = document.querySelector(".image-list");
const btns = document.querySelectorAll(".view-options button");
const imageListItems = document.querySelectorAll(".item-list li");
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