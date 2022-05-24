let timer = setTimeout(function(){
    alert("시간 다 됨");
}, 3000);

/*  
    일정 시간이 지난 후 딱 한번 실행
    setTimeout(function(){할일},시간);
    멈출땐
    clearTimeout(타이머이름);

    일정 시간마다 할 일
    setInterval(function(){할일},시간);
    멈출땐
    clearInterval(타이머이름);
*/