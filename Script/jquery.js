$(document).ready(function() {
	$("#button").click(function() {
		$(".columnPixel").remove();
		for(var columnNumber = 0; 
			columnNumber < $("input[name='column']").val(); 
			columnNumber++) {
			$(".wrap").append("<div class='columnPixel'></div>")
		};
		$(".rowPixel").remove();
		for(var rowNumber = 0; 
			rowNumber < $("input[name='row']").val(); 
			rowNumber++) {
			$(".columnPixel").append("<div class='rowPixel'></div>");
		};
	});
	$(".rowPixel").mouseover(function() {
		$(this).switchClass("color");
	});
});