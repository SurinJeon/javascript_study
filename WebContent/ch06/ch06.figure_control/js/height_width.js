$(function(){
	var w1 = $("#p1").width();
	console.log(w1);
	
	var w2 = $("#p1").innerWidth();
	console.log(w2);
	
	var w3 = $("#p1").outerWidth();
	console.log(w3);
	
	$("#p2").outerWidth(100).outerHeight(100);
});