$(function(){
	$(".btn1").on("click", function(){
		$(".txt1").animate({
			marginLeft: "500px",
			fotSize: "30px"
		}, 2000, "linear", function(){
			alert("모션완료");
		});
	});
	
	$(".btn2").on("click", function(){
		$(".txt2").animate({
			marginLeft: "+=50px",
		}, 1000);
	});
})