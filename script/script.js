


$(".opn").on("click", function (event) {
    console.log(this)
    var onoff = $(this).attr("name");
    if (onoff==="on") {
        $(this).children().eq(1).attr("style",'height: 300px; opacity: 0.7;');
        $(this).children().eq(0).height( "300px");
        $(this).attr("name", "off");
        var hide = $(this).children().eq(0).children().eq(3)
        if (hide!==null) {
            $(this).children().eq(0).children().eq(3).css("display", "none");
        }
        $(this).children().eq(0).children().eq(2).css("display", "inline");
        $(this).children().eq(0).children().eq(4).removeClass("tlsshow");
        $(this).children().eq(0).children().eq(4).addClass("tools");
    } else if (onoff==="off") {
        $(this).children().eq(1).attr("style",'height: 500px; opacity: 1.0;');
        $(this).children().eq(0).height( "fit-content");
        $(this).attr("name", "on");
        var hide = $(this).children().eq(0).children().eq(3)
        if (hide!==null) {
            $(this).children().eq(0).children().eq(3).css("display", "inline");
        }
        $(this).children().eq(0).children().eq(2).css("display", "none");
        $(this).children().eq(0).children().eq(4).removeClass("tools");
        $(this).children().eq(0).children().eq(4).addClass("tlsshow");
    }

})






