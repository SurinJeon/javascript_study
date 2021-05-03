$(function(){
	$(".txt1")
	.animate({marginLeft:"100px"}, 1000)
	.animate({marginLeft:"300px"}, 1000)
	.animate({marginLeft:"400px"}, 1000);
	
	$(".txt2")
	.animate({marginLeft:"100px"}, 1000)
	.animate({marginLeft:"300px"}, 1000)
	.animate({marginLeft:"400px"}, 1000);	
	$(".txt2").clearQueue();
});