var pjct1 =$(".pjct-1")
var pjct2 =$(".pjct-2")
var pjct3 =$(".pjct-3")



pjct1.on("click", function (event) {
    var onoff = pjct1.attr("id");
    if (onoff==="on") {
        pjct1.children().eq(1).height('300px');
        pjct1.children().eq(0).css("height", "300px");
        pjct1.attr("id", "off");
        $(".hide").css("display", "none");
        $(".rmore").css("display", "inline");
        $(".pjct-1").children().eq(0).children().eq(5).attr("style", " display: none; ")
    } else if (onoff==="off") {
        pjct1.children().eq(1).height('500px');
        pjct1.children().eq(0).css("height", "500px");
        pjct1.attr("id", "on");
        $('.hide').css("display", "inline");
        // $('.hide1').css("border-bottom", "3px solid var(--mainneon)");
        $(".rmore").css("display", "none");
        $(".pjct-1").children().eq(0).children().eq(5).attr("style", "border-top: 3px solid var(--mainneon); display: block; height:fit-content;")
    }

})




