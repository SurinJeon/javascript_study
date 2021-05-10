$(function() {
	$(".size span, .color span").click(function() {
		$(this).addClass("active");
		$(this).siblings().removeClass("active"); /* 원래 적용되어 있던건 다 사라지게 */
	});

	$(".like").click(function() {
		$(this).toggleClass("active");
	});
});