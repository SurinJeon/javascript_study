$(function(){
	$(".btn_1.on").on("mouseover blur", function(){
		alert("HELLO!");
	});
	$(".btn_1").addClass("on");
	
	$(document).on("mouseover blur", ".btn_2.on", function(){
		alert("WELCOME!");
	})
	$(".btn_2").addClass("on");
});
