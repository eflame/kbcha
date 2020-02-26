
$(window).on('load', function(){
	
});

$(function(){
	if ($('body').hasClass('fixedScroll')){
		btmAreaFixed();
	}
});

function btmAreaFixed(){
	var lastScrollTop = 0;
	var didScroll = true;
	
	$(window).on('scroll', function(){
		var wHgt = Math.ceil($(window).height());
		var dHgt = Math.ceil($(document).height());
		var sTop = Math.ceil($(this).scrollTop());
		var aaa = dHgt - wHgt;

		if (sTop >= dHgt - wHgt - 100 && didScroll == true){
			console.log('바닥');

			didScroll = false;
			$('.fixedVal .tit2').text('바닥');
		} else if (sTop < dHgt - wHgt - 100 && didScroll == false){
			console.log('x');

			didScroll = true;
			$('.fixedVal .tit2').text('');
		}
		lastScrollTop = sTop;
		$('.fixedVal .tit1').text(sTop + ' , ' + dHgt + '-' + wHgt + '=' + aaa + ',' + lastScrollTop);
	});
}



/*
var hasScrolled = function(){
	var didScroll;
	var lastScrollTop = 0;

	$(window).on('scroll', function(event){
		didScroll = true;
	});

	setInterval(function(){
		if (didScroll) {
			fixedScrolling();
			didScroll = false;
		}
	}, 100);

	function fixedScrolling(){
		var sTop = $(this).scrollTop();

		if (sTop > lastScrollTop) {
			if ($('.section_btm_fixed').hasClass('active') == false){
				$('.section_btm_fixed .btn_wrap2').slideUp();
			}

			$('body').css({'border' : "8px solid red"});
			console.log('down');
		} else {
			if (sTop + $(window).height() < $(document).height()) {
				if ($('.section_btm_fixed').hasClass('active') == false){
					$('.section_btm_fixed .btn_wrap2').slideUp();
				}
				

				$('body').css({'border' : "8px solid blue"});
				console.log('up');
			}

			console.log('?');
		}

		if (sTop == $(document).height() - $(window).height()) {
			$('.section_btm_fixed .btn_wrap2').slideDown();

			$('body').css({'border' : "8px solid green"});
			console.log('bottom');
		}
		
		lastScrollTop = sTop;

		console.log(sTop , $(document).height() - $(window).height())
	}
}
*/
