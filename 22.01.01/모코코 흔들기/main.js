function shake() {
    // 
    let random1 = Math.floor(Math.random() * 20);
    let random2 = Math.floor(Math.random() * 70);
    let random3 = Math.floor(Math.random() * 3)+100;

    $(".container").css({
        "bottom" : random1,
        "left" : random2
    });

    $(".text").css({
        "font-size" : random3 * 4 + "%"
    });
}

setInterval(shake, 20);