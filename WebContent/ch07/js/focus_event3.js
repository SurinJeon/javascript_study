$(function(){
	$("#rel_site").on("change", function(){
		$(".txt").text($(this).val());
	});
});