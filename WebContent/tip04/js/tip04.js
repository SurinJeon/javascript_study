$(function() {
	/*
	
	$(".navi li").mouseenter(function(){
		var changeImg = $(this).attr("data-image");
//		alert(changeImg); // debugging

		$(".photo").css({
			"background-image" : "url(" + changeImg + ")"
		});
	});
	
	$(".navi li").mouseleave(function() {
		$(".photo").css({
			"background-image": ""
		});
	});

	*/
	
	$(".navi li").on({"mouseover focus":overFnc, "mouseout blur":outFnc});
 	$(".navi li").on({"keyup":overFnc});

	function overFnc() {
//		var changeImg = $(this).attr("data-image");
		var imgIdx = $(this).index() + 1;
		$(".photo").css({
			"background-image": "url(img/portrait-0" + imgIdx + ".jpg)"
		});
	}

	function outFnc() {
		$(".photo").css({
			"background-image": ""
		});
	}
});