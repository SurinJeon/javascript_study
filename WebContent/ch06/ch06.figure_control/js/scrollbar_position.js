$(function(){
	var topNum = $("h1").offset().top;
	$(window).scrollTop(topNum);
	
	var sct = $(window).scrollTop();
	console.log(sct);
})
