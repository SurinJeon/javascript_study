function hideAndShow() {
	if ($(".btn1").is(":visible")) {
		$(".btn1").hide();
		$(".btn2").show();
	} else if ($(".btn2").is(":visible")) {
		$(".btn1").show();
		$(".btn2").hide();
	}
}

function slideUp() {
	$(".box").slideUp(1000, "linear", hideAndShow);
}

function fadeIn() {
	$(".box").fadeIn(1000, "swing", hideAndShow);
}

function slideToggle() {
	$(".box").slideToggle(1000, "linear");
}

function fadeToFast() {
	$(".box").fadeTo("fast", 0.3);
}


function fadeToSlow() {
	$(".box").fadeTo("slow", 1);
}


$(function() {
	$(".btn2").hide();

	$(".btn1").on("click", slideUp);

	$(".btn2").on("click", fadeIn);

	$(".btn3").on("click", slideToggle);

	$(".btn4").on("click", fadeToFast);

	$(".btn5").on("click", fadeToSlow);
})
