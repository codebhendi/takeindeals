$(document).ready(function() {
	var changeSides = function() {
		$('.ui.shape')
			.eq(0)
				.shape('flip over')
				.end()
			.eq(1)
				.shape('flip over')
				.end()
			.eq(2)
				.shape('flip over')
				.end()
			.eq(3)
				.shape('flip over')
				.end()
		;
	}

	$('.ui.image.hover')
		.dimmer({
			on:'hover'
		})
	;

	setInterval(changeSides, 3000);
	
});

window.onload = initall;

function initall() {
	var itemList = document.getElementsByClassName("item-img");
	var blogList = document.getElementsByClassName("blogs");

	for (var i = 0; i < blogList.length; i++) {
		blogList[i].onmouseover = changeBorder;
		blogList[i].onmouseout = resetBorder;
	}
	for (var k = 1; k <= itemList.length; k++) {
		document.getElementById("item-"+k).onmouseover = changeBorder;
		document.getElementById("item-"+k).onmouseout = resetBorder;
	}

	function changeBorder() {
		this.style.border = "1px green solid";
	}

	function resetBorder() {
		this.style.border = "1px white solid";
	}
}