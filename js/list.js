function searchBook() {

	if(event.keyCode == 13){

		console.log("js에 드루와");

		$.ajax({
			url: "http://localhost:8080/book/bookList",
			type: "GET",
			dataType: "jsonp",
			jsonp: "callback",
			data: {
				keyword : $("#keyword").val()
			},
			success: function(result){


				for(var i=0 ; i<result.length ; i++) {

					var tr= $("<tr></tr>");
					var title= $("<td></td>").text(result[i].title);
					var author= $("<td></td>").text(result[i].author);
					var price= $("<td></td>").text(result[i].price);
					var img = $("<img />").attr("src", result[i].imgurl);
					var imgtd = $("<td></td>").append(img);





				tr.append(imgtd);
				tr.append(title);
				tr.append(author);
				tr.append(price);

				$("tbody").append(tr);
				}


			},
			error:function(){
				alert("error");
			}
		});

	}




}