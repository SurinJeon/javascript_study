$(function() {
	$.ajax({
		url: "json/MOCK_DATA.json",
		dataType: "json",
		success: function(data) {
			console.log(data);
			if (data.length > 0) {
				var tb = $("<table/>")

				$.each(data, function(idx, obj) {
					// 어차피 다 string으로 넘어오기 때문에 바로 .id .first_name 하면 됨
					console.log(obj);
					var id = obj.id;
					var first_name = obj.first_name;
					var last_name = obj.last_name;
					var email = obj.email;
					var gender = obj.gender;

					var row = $("<tr/>").append(
						$("<td/>").text(id),
						$("<td/>").text(first_name),
						$("<td/>").text(last_name),
						$("<td/>").text(email),
						$("<td/>").text(gender)
					);

					tb.append(row);
				})

			}
			$(".wrap").append(tb);
		}
	})
})