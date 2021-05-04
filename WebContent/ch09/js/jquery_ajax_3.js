$(function() {
	$.ajax({
		url: "xml/dataset.xml",
		dataType: "xml",
		success: function(data) {
			var data = $(data).find("record");

			if (data.length > 0) {
				var tb = $("<table/>")
				$.each(data, function(idx, obj) {
					console.log(obj); // debugging용 console.log << 여기서 obj는 <record></record> 의미함
					var id = $(obj).find("id").text();

					var first_name = $(obj).find("first_name").text();
					var last_name = $(obj).find("last_name").text();
					var email = $(obj).find("email").text();
					var gender = $(obj).find("gender").text();

					var row = $("<tr/>").append(
						$("<td/>").text(id),
						$("<td/>").text(first_name),
						$("<td/>").text(last_name),
						$("<td/>").text(email),
						$("<td/>").text(gender)
					);
					
					tb.append(row);
					
				});
				
				$(".wrap").append(tb);

			}
			
		}
	});
});