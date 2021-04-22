$(function() {
	var $txt1 = $(".txt_1 span"),
		$txt2 = $(".txt_2 span"),
		$box = $(".box");
		
	var off_t = $box.offset().top;
	var pos_t = $box.position().top;
	
	$txt1.text(off_t);
	$txt2.text(pos_t);
	
})