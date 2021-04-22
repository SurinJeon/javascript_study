$(function(){
	var result_1 = $("#chk1").prop("checked"); /*chk1이 체크되어 있다면 true*/
	console.log(result_1);
	
	var result_2 = $("#chk2").prop("checked");
	console.log(result_2);
	
	var result_2 = $("#chk3").prop("checked", true);
	
	var result_3 = $("#se_1").prop("selectedIndex");
	console.log(result_3);
})