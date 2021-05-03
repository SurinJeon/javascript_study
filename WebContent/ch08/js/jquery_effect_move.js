$(function() {
	var txt1 = $(".txt1");
	var count = 1;
	$(".btnWrap button").on("click", function() {
		if(!txt1.is(":animated")){
			if($(this).hasClass("backBtn")){
				count--;
				if(count < 1){
					count = 1;
					return false;
				}
				txt1.animate({marginLeft : "-=10%"}, 300);
			} else{
				count++;
				if(count > 10){
					count = 10;
					return false;
				}
				txt1.animate({marginLeft : "+=10%"}, 300);
			}
		}
	})
});