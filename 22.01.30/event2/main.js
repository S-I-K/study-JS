$(document).ready(function(){
    $(".btn1").on({
        "mouseover" : function(){
            $(".p1").css({
                "color" : "red",
                "font-weight" : "bold"
            });
        },
        "mouseout" : function(){
            $(".p1").css({
                "color" : "black",
                "font-weight" : "normal"
            });
        }
    });

    $(".btn2").on({
        "mouseover" : function(){
            $(".p2").css({
                "color" : "blue",
                "font-weight" : "bold"
            });
        },
        "mouseout" : function(){
            $(".p2").css({
                "color" : "black",
                "font-weight" : "normal"
            })
        }
    });
});