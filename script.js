$(".clkMe").click(function(){
    $(".scrtMess").fadeIn();
    $(".clkMe").hide();
});
    
$("h1").dblclick(function(){
    $(".hovMess").fadeIn();
    $(".scrtMess").hide();
});

$(".hovMess").hover(function(){
    $(".giffPic img").fadeIn();
    $(".giffMess").fadeIn();
    $(".hovMess").hide();
    $(".scrtMess").hide();
    $(".magnify").hide();
});

$(".giffPic img").mouseenter(function(){
    $(".lochness img").fadeIn();
    $(".lochmess").fadeIn();
    $(".giffPic img").hide();
    $(".giffMess").hide();
});