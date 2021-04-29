$(function(){
	$(document).on("keydown", keyEventFnc);
	
	function keyEventFnc(e){
		var direct = "";
		
		switch(e.keyCode) {
		case 37:
			direct = "LEFT";
			break;
		case 38:
			direct = "TOP";
			break;
		case 39:
			direct = "RIGHT";
			break;
		case 40:
			direct = "BOTTOM";
			break;
		}
		
		if(direct)$("#user_id").val(direct);
		
	}
});