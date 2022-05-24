/* js로 비디오 컨트롤
let myAudio = document.querySelector("#myaudio");
console.log(myAudio);
function playAudio(){
    myAudio.play();
}
function pauseAudio(){
    myAudio.pause();
}
document.querySelector("#aplay").addEventListener("click", playAudio);
document.querySelector("#apause").addEventListener("click", pauseAudio);
*/

/* jq로 비디오 컨트롤
$(function(){
    let myVideo = $("#myVideo");
    $("#vplay").click(function(){
        myVideo.get(0).play();
    });
    $("#vpause").click(function(){
        myVideo.get(0).pause();
    });
});
*/

