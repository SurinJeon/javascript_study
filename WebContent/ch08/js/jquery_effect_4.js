$(function(){
	$(".txt1")
	.animate({marginLeft : "200px"}, 1000)
	.animate({marginTop : "200px"}, 1000)
	.queue(function(){
		$(this).css({background:"red"});
		$(this).dequeue();
	})
	.animate({marginLeft : 0}, 1000)
	.animate({marginTop : 0}, 1000);
});