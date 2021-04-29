$(function(){
	$("#btn1")
		.data({"text":"javascript"})
		.on({
			"mouseover": overFnc,
			"mouseout" : outFnc
	});
	
	$("#btn2")
		.data({"text":"welcome!"})
		.on({
			"mouseover focus": overFnc,
			"mouseout blur" : outFnc
	});
	
	function overFnc(){
		$(".txt").text($(this).data("text"));
	}
	
	function outFnc(){
		$(".txt").text("");
	}
});
