$(function(){
	var srcVal = $("#sec_1 img").attr("src");
	console.log(srcVal);
	
	$("#sec_1 img").attr({
		"width" : 200,
		"src" : srcVal.replace("가위.jpg", "바위.jpg"),
		"alt" : "바위"
	})
	.removeAttr("border");
	
});