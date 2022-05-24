$(document).ready(function(){
    let $mococo = $(".mococo");
    $(".btn").on("click",function(){
        $mococo.animate({
            left:"430px"
        },1000);
        
        $mococo.animate({
            right:"430px"
        },1000);
    });
});