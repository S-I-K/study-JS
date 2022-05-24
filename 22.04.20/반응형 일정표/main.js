window.addEventListener("load", createChart);
window.addEventListener("resize", createChart);

function createChart(e){
    const days = document.querySelectorAll(".chart-values li");
    const tasks = document.querySelectorAll(".chart-bars li");
    // NodeList를 Array로 바꾸는 방법
    const daysArray = [...days];

    tasks.forEach(function(el){
        // 변수지정
        const duration = el.getAttribute("data-duration").split("-");
        const startDay = duration[0];
        const endDay = duration[1];
        let left = 0,
            width = 0;

        console.log(duration);
        // Bar left 확인
        if(startDay.endsWith("½")){
            const filteredArray = daysArray.filter(day => day.textContent == startDay.slice(0, -1));
            left = filteredArray[0].offsetLeft + filteredArray[0].offsetWidth / 2;
        }else{
            const filteredArray = daysArray.filter(day => day.textContent == startDay);
            left = filteredArray[0].offsetLeft;
        }
        // Bar의 width 확인
        if(endDay.endsWith("½")){
            const filteredArray = daysArray.filter(day => day.textContent == endDay.slice(0, -1));
            width = filteredArray[0].offsetLeft + filteredArray[0].offsetWidth / 2 - left;
        }else{
            const filteredArray = daysArray.filter(day => day.textContent == endDay);
            width = filteredArray[0].offsetLeft + filteredArray[0].offsetWidth - left;
        }
        // left,width를 li css로 지정.
        el.style.left = `${left}px`;
        el.style.width = `${width}px`;
        if(e.type == "load"){
            el.style.backgroundColor = el.dataset.color;
            el.style.opacity = 1;
        }
    });
}