/* 실시간 날짜 및 시간 */
const clockContainer = document.querySelector('.js-clock');
const clockTitle = clockContainer.querySelector('h1');
function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours<10?`$0${hours}`:hours}:${minutes<10?`0${minutes}`:minutes}:${seconds<10?`0${seconds}`:seconds}`;
    /* 삼항연산자 -- 조건?true:false */
}

/* 초기 함수 */
function init() {
    /* 시계 */
    getTime();
    setInterval(getTime,1000);
}
init();