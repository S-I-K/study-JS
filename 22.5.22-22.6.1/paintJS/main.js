let painting = false;
let filling = false;
const canvas = document.querySelector('#jsCanvas');
const ctx = canvas.getContext('2d');
const colors = document.querySelectorAll('.jsColor');
const range = document.querySelector('#jsRange');
const mode = document.querySelector('#jsMode');
const INITIAL_COLOR = '#2c2c2c';
const saveBtn = document.querySelector('#jsSave');

// Canvas의 크기 기본값 설정
const CanvasSize = 700;
canvas.width = CanvasSize;
canvas.height = CanvasSize;
// Canvas의 선 두께 및 색상 기본값 설정
ctx.fillStyle = '#ffff';
ctx.fillRect(0, 0, CanvasSize, CanvasSize);
ctx.fillStyle = INITIAL_COLOR;
ctx.strokeStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;

function stopPainting(){
    painting = false;
}
function startPainting(){
    painting = true;
}
function onMouseMove(event){
    // event 자체에서 마우스의 좌표값을 반환
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){ // false 일때
        ctx.beginPath();
        ctx.moveTo(x, y); // 선의 시작점
    }else{
        ctx.lineTo(x, y); // 선이 이어지는 점
        ctx.stroke(); // 실제로 그리기
    }
}
if(canvas){
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mousedown', startPainting);
    canvas.addEventListener('mouseup', stopPainting);
    canvas.addEventListener('mouseleave', stopPainting);
    canvas.addEventListener('click', handleCanvasClick);
    canvas.addEventListener('contextmenu', handleCM);
}
// fill style
function handleCanvasClick(){
    if(filling == true){
        ctx.fillRect(0, 0, CanvasSize, CanvasSize);
    }
}

// 색상 변경
function handleColorClick(event) {
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}
Array.from(colors).forEach(function(color){
    color.addEventListener('click', handleColorClick);
});


// Range 변화에 따라 브러쉬 두께 변화
function handleRangeChange(event){
    const size = event.target.value;
    ctx.lineWidth = size;
}
if(range){
    range.addEventListener('input', handleRangeChange);
}

// Fill, Paint Mode Change
function handleModeClick(){
    if(filling == true){ //paint mode
        filling = false;
        mode.innerText = 'Fill';
    }else{ // fill mode
        filling = true;
        mode.innerText = 'Paint';

    }
}
if(mode){
    mode.addEventListener('click', handleModeClick);
}

// Canvas의 우클릭 비활성화
function handleCM(event){
    event.preventDefault();
}
// Image Save Btn
function handleSaveClick(){
    const image = canvas.toDataURL(); // 그린 이미지를 URL로 받아옴
    const link = document.createElement('a'); // <a></a>
    link.href = image; // link에 image의 url을 href에 추가
    link.download = 'PaintJS'; // download 되는 파일명
    link.click();
}
if(saveBtn){
    saveBtn.addEventListener('click', handleSaveClick);
}


console.log(range);