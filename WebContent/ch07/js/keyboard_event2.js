$(function(){
	$(".menuWrap_1 a").on("clikc", function(e){
		e.preventDefault();
		
		$(".menuWrap_1 a").css({
			"background-color":"#fff"
		});
		
		$(this).css({
			"background-color":"#ff0"
		});
	});
	
	$(".menuWrap_2 a").on("click", function(e){
		e.preventDefault();
		
		$(".menuWrap_2 a").css({
			"background-color":"#fff"
		});
		
		var idx = $(".menuWrap_2 a").index(this);
		
		$(".menuWrap_2 a").eq(idx).css({
			"background-color":"#0ff"
		});
		
		$(".idxNum").text(idx);
	});
});