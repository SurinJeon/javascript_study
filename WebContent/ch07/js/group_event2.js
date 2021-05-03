function altFunc(){
	alert("Hello!")
	$(".btn_3").addClass("on");
}


$(function(){
	$(".btn_wrap").delegate(".btn_1.on", "mouseover blur", function(){
		alert("HELLO!");
	});
	
	$(".btn_1").addClass("on");
	
	$(document).one("mouseover blur", ".btn_2.on", function(){
		alert("WELCOME!");
	});
	
	$(".btn_2").addClass("on");
})
