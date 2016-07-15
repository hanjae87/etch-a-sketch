$(document).ready(function() {
	$("#button").click(function() {
		var rowInput = $("input[name=row]").val();
		var columnInput = $("input[name=column]").val();

		var pixelWidth = 1500/columnInput;
		var pixelHeight = 1500/rowInput;

		$(".columnPixel").remove();
		for(var columnNumber = 0; 
			columnNumber < columnInput; 
			columnNumber++) {
			$(".wrap").append("<div class='columnPixel'></div>")
		};
		$(".columnPixel").css({"width": pixelWidth, "height": pixelHeight});
		$(".rowPixel").remove();
		for(var rowNumber = 0; 
			rowNumber < rowInput; 
			rowNumber++) {
			$(".columnPixel").append("<div class='rowPixel'></div>");
		$(".rowPixel").css({"width": pixelWidth, "height": pixelHeight});
		};
	});
	$("div").on("mouseover", ".rowPixel", function() {
		$(this).addClass("color")
	});
});