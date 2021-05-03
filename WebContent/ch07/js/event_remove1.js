$(function(){
	$(".btn_1").on("mouseover", function(){
		alert("Hello World!");
	});
	
	$(document).on("mouseover", ".btn_2", function(){
		alert("Welcome!");
	});
	
	var btn_2 = $("<p><button class=\"btn_2\">버튼2</button></p>")
	$("#wrap").append(btn_2);
	
	$(".del_1").on("click", function(){
		$(".btn_1").off("mouseover");
	});
	
	$(".del_2").on("click", function(){
		$(document).off("mouseover", ".btn_2");
	})
})