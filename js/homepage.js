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

document.onscroll = fixMenuBar;
window.onload = initall;

function initall() {
	//var catalogs = document.getElementsByClassName("onmouseover");
	var itemList = document.getElementsByClassName("item-img");
	var blogList = document.getElementsByClassName("blogs");

	/*for (var i = 0; i < catalogs.length; i++) {
		if (catalogs[i]) {
			catalogs[i].onmouseover = function () {
				dimmer(catalogs[i]);
			};
		}
	}*/

	for (var i = 0; i < blogList.length; i++) {
		blogList[i].onmouseover = changeBorder;
		blogList[i].onmouseout = resetBorder;
	}
	
	for (var k = 1; k <= itemList.length; k++) {
		document.getElementById("item-"+k).onmouseover = changeBorder;
		document.getElementById("item-"+k).onmouseout = resetBorder;
	}

	/*function dimmer() {
		alert(this);
		allTags = this.children;
		for (var k = 0; k < allTags.length; k++) {
				alert("found");
		}
	}*/

	function changeBorder() {
		///alert("v/mg")
		this.style.border = "1px green solid";
	}

	function resetBorder() {
		this.style.border = "1px white solid";
	}
}

function fixMenuBar(evt) {
	if (!evt) {
		evt =window.event;
	}

	var distanceY = window.pageYOffset || document.documentElement.scrollTop,
		minDist = 100;
		fixedMenu = document.getElementById('fixedMenu'),
		classes = fixedMenu.className;

	if (distanceY > minDist) {
		if (fixedMenu.className) {
			classes = classes + " fixed";
		}
	} else {
		if (fixedMenu.className) {
			var tempClass = "";
			var allClasses = fixedMenu.className.split(" ");
			
			for (var i = 0; i < allClasses.length; i++) {
				if (allClasses[i] != "fixed" && allClasses[i] != "") {
					tempClass = tempClass + allClasses[i] + " ";
				}
			}
			classes = tempClass;
		}
	}
	fixedMenu.className = classes;
}
