$(function(){
	$(".txt1").animate({marginLeft : "300px"}, 1000);
	$(".txt2").delay(3000).animate({marginLeft : "300px"}, 1000);
	
	$(".btn1").on("click", moveElement);
	
	function moveElement(){
		$(".txt3").animate({marginLeft : "+=50px"}, 800);
		
		$(".txt4").animate({marginLeft : "+=50px"}, 800);
		$(".txt4").stop();
		
		$(".txt5").animate({marginLeft : "+=50px"}, 800);
		$(".txt5").stop(true, true);
	}
})