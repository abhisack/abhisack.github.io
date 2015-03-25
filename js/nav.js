$(document).ready(function(){
$(".btn").click(function(){
$(".overlay").css({"visibility":"visible","opacity": "0.3"}, "slow");
$("#nav").animate({right:'0', opacity:'1'}, "slow");
});
$(".close").click(function(){
    $("#nav").animate({right:'-1366px'}, "fast");
    $(".overlay").css({"visibility":"hidden","opacity": "0"}, "slow");
});
});