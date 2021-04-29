$(function() {
	$("#user_id_1, #user_pw_1").on("focus",
	 	function(){
			$(this).css({
				"background-color" : "pink"			
		});
	});
	
	$("#user_id_1, #user_pw_1").on("blur",
		function(){
			$(this).css({
				"background-color" : "#fff"				
		});
	});
	
	$("#frm_2").on("focusin",
		function(){
			$(this).css({
				"background-color" : "pink"
		});
	});
	

	$("#frm_2").on("focusout",
		function(){
			$(this).css({
				"background-color" : "#fff"
		});
	});
});