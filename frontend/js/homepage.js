$(document).ready(function() {
	var imageNumber = $('#slider > a > img').size(),
		sliderNext = 2;

	$("#slider > a > img#1").fadeIn(300);

	for (var k = 0; k < $("#thumbnail > li").size(); k++) {
		$("#thumbnail > li > div").on("click", function(ev) {
			sliderNext = parseInt($(this).attr("id")[5]);
			(loop)();
		});
		break;
	}


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

	setInterval(changeSides, 3000);

	var loop = function startSlider() {
		$('#slider > a > img').fadeOut(300);
		console.log($("#slider > a > img#" + sliderNext));
		$('#slider > a > img#' + sliderNext).fadeIn(300);
			
		sliderNext = (sliderNext % imageNumber) + 1;
	};

	setInterval(loop, 5000);
	
});


window.onload = initall;

function initall() {
	//var catalogs = document.getElementsByClassName("onmouseover")
	var itemList 	= document.getElementsByClassName("item-img"),
		blogList 	= document.getElementsByClassName("blogs"),
		hiddenDeal	= document.getElementsByClassName("deal-block");
		headerfixed = (function() {
		
			var docElem 		= document.documentElement,
				fixedRow 		= document.getElementById('fixedMenu'),
				didScroll 		= false,
				changeHeaderOn 	= 500;

			//alert(fixedRow);
			function init() {
				window.addEventListener( 'scroll', function( event ) {
					if( !didScroll ) {
						didScroll = true;
						scrollPage();
					}
				}, false );
			}

			function scrollPage() {
				var sy = scrollY();
				if ( sy >= changeHeaderOn ) {
					if (fixedRow.className.indexOf('fixed') <= -1) {
						fixedRow.className = fixedRow.className + ' fixed';
					}
				}
				else {
					classRemove(fixedRow, 'fixed');
				}
				didScroll = false;
			}

			function scrollY() {
				return window.pageYOffset || docElem.scrollTop;
			}

			init();

		})()
	;
	
	for (var k = 0; k < blogList.length; k++) {
		blogList[k].onmouseover 	= changeBorder;
		blogList[k].onmouseout 		= resetBorder;
	}
	
	for (var k = 1; k <= itemList.length; k++) {
		document.getElementById("item-"+k).onmouseover 	= changeBorder;
		document.getElementById("item-"+k).onmouseout 	= resetBorder;
	}

	for (var j = 0; j < hiddenDeal.length; j++) {
		hiddenDeal[j].onmouseover = visibilityToggle;
		hiddenDeal[j].onmouseout  = visibilityToggle;
	}


	function changeBorder() {
		///alert("v/mg")
		this.style.border = "1px green solid";
	}

	function resetBorder() {
		this.style.border = "1px white solid";
	}


	function classRemove(thisTag, c) {
		var classTemp = "";
		var allClasses = thisTag.className.split(' ');
		for(var j = 0; j < allClasses.length; j++) {
			if (allClasses[j] != c) {
				classTemp += allClasses[j] + " ";
			}
		}
		thisTag.className = classTemp;
	}

	function visibilityToggle() {
		var thisTag = this.children[1];

		if (thisTag.style.opacity == 0) {
			thisTag.style.opacity = 1;
		} else {
			thisTag.style.opacity = 0;
		}
	}
}




