$(document).ready(function(){
$(".btn").click(function(e){
	e.preventDefault();
$(".overlay").css({"visibility":"visible","opacity": "0.3"}, "slow");
$("#nav").animate({right:'0', opacity:'1'}, "slow");
});
$(".close").click(function(e){
	e.preventDefault();
    $("#nav").animate({right:'-1366px'}, "fast");
    $(".overlay").css({"visibility":"hidden","opacity": "0"}, "slow");
});
});