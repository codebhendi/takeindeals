$(document).ready(function() {
	var slider = 1;
	var sliderNext = 2;

	$("#slider > img#1").fadeIn(300);
	startSlider();

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

	function startSlider() {
		var imageNumber = $('#slider > img').size();
		loop = setInterval(function() {
			$('#slider > img').fadeOut(300);
			$('#slider > img#' + sliderNext).fadeIn(300);
			
			sliderNext = (sliderNext % imageNumber) + 1;
		}, 3000);
	}
	
});


window.onload = initall;

function initall() {
	//var catalogs = document.getElementsByClassName("onmouseover")
	var itemList 	= document.getElementsByClassName("item-img"),
		blogList 	= document.getElementsByClassName("blogs"),
		headerfixed = (function() {
		
			var docElem 		= document.documentElement,
				fixedRow 		= document.getElementById('fixedMenu'),
				didScroll 		= false,
				changeHeaderOn 	= 600;

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
	
	for (var i = 0; i < blogList.length; i++) {
		blogList[i].onmouseover 	= changeBorder;
		blogList[i].onmouseout 		= resetBorder;
	}
	
	for (var k = 1; k <= itemList.length; k++) {
		document.getElementById("item-"+k).onmouseover 	= changeBorder;
		document.getElementById("item-"+k).onmouseout 	= resetBorder;
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
}




