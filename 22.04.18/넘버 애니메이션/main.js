let numAnimation = document.querySelectorAll(".num_animation");
let num = 0;

function changeNum(idx){
    let num = 0;
    let intervalTime = 20;
    let rate = numAnimation[idx].getAttribute("data-rate");
    if(rate > 40){
        intervalTime = 10;
    }
    let timer = setInterval(function(){
        ++num
        numAnimation[idx].innerText = num;

        if(num == rate){
            clearInterval(timer);
        }
    },intervalTime);
}

for(let i=0; i<numAnimation.length; i++){
    changeNum(i);
}