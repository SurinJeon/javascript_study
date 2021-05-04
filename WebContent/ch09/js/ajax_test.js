$(function() {
	$("#sendButton").click(
		function() {
			var params = {"userId":$("#userId").val(),"userPwd" : $("#userPwd").val()};

//			console.log(params);
			$.ajax({
				type: "get",
				url: "ajax_ok.jsp",
				data: $.param(params),
				dataType: "json",
				success: function(args) {
					console.log(args);
					var str = "userId=" + args.userId + ",userPwd=" + args.userPwd + "<br/>";

					$("#resultDIV").html(str);
				},
				error: function(e) {
					alert(
						"code: " + reqeust.status + "\n"
						+ "message: " + request.responseText + "\n"
						+ "error : " + error
						);
				}

			});
		});
});