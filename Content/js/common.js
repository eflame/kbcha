
$(window).on('load', function(){
	fixedBtmBody();
	fixedBtmPopup();
});

$(function(){  
	$('input[type=range]').on('input', function(){
		var val = $(this).val();
		$(this).css('background', 'linear-gradient(to right, #ffba00 0%, #ffba00 '+ val +'%, #DDD ' + val + '%, #DDD 100%)');
	});

	//tab : event
	$('.layerTab.tab_wrap').each(function () {
		$(this).children('.tab_tit').find('li a').each(function (i) {
			$(this).parent('li').attr('idx', i);
		}).on('click', function(obj){
			var n = $(this).parent('li').attr('idx');
			var $tab = $(this).closest('.tab_wrap');
			var $tabTit = $tab.children('.tab_tit');
			var $tabCon = $tab.children('.tab_con_wrap').children('.tab_con');
			$(this).addClass('active').parent('li').siblings().find('a, button').removeClass('active');
			$tabCon.removeClass('active');
			$tabCon.eq(n).focus().addClass('active');
		});
	});

	$('.list_tog_btn a').on('click', function(){
		var $btns = $(this).parent('li').siblings().find('a');
		$(this).addClass('active');
		$btns.removeClass('active');
	});

	$('.toggle_wrap .toggle_top .btn_toggle').on('click', function(){
		var $toggle = $(this).closest('.toggle_wrap');
		if($(this).hasClass('open')){
			$(this).removeClass('open').addClass('close').text('접어보기');
			$toggle.addClass('active');
			//$toggle.find('.toggle_con').slideDown(1000, "easeOutElastic");
		} else if($(this).hasClass('close')) {
			$(this).removeClass('close').addClass('open').text('펼쳐보기');
			$toggle.removeClass('active');
			//$toggle.find('.toggle_con').slideUp(500, "easeInOutQuart");
		}
	});
});

/*
easeOutElastic
easeInOutQuart
easeOutBounce
easeOutQuad
easeInOutBack
*/















$(function(){
	//

});





/***********************************************
	* 함수
************************************************/

function fixedBtmBody(){
	if ($('.contents .section_btm_fixed').length > 0){
		var btmFixedHgt = $('.contents .section_btm_fixed').innerHeight();
		$('.contents').css({'padding-bottom' : btmFixedHgt});
	};
}

function fixedBtmPopup(){
	if ($('.layer_contents .section_btm_fixed').length > 0){
		var btmFixedHgt = $('.layer_contents .section_btm_fixed').innerHeight();
		$('.layer_contents').css({'padding-bottom' : btmFixedHgt});
	};
}

function openLayerBtm(){
	var pop = $('.layer_btm_wrap');
	obj = pop;
	createDim(pop);
	pop.slideDown(500, "easeInOutQuart");
}
function closeLayerBtm(){
	$('.layer_btm_wrap').slideUp(300, "easeInOutQuart", function(){
		$(this).prev('.dim').remove();
	});
}

function createDim(){
	if ($('.dim').length < 1){
		$('body').css({'overflow' : 'hidden'});
		$(obj).before('<div class="dim"></div>');
	}
}

function removeDim(){
	$("body").css({'overflow' : ''});
	$(".dim").remove();
};



























$(function(){
	$('.section_btm_fixed .btn_toggle').on('click',function(){
		var $fixedArea = $(this).parents('.section_btm_fixed');
		$fixedArea.find('.price_list').slideToggle(300);
		$fixedArea.toggleClass('active');
		if ($fixedArea.find('.btn_wrap2').css('display') == 'block'){
			$fixedArea.find('.btn_wrap2').slideDown();
		} else {
			$fixedArea.find('.btn_wrap2').slideDown();
		}
	});
});

var headerAni = function(){
	var didScroll;
	var lastScrollTop = 0;
	var delta = 5;
	var navbarHeight = $('.header').outerHeight();

	$(window).on('scroll', function(event){
		didScroll = true;
	});

	setInterval(function(){
		if (didScroll) {
			hasScrolled();
			didScroll = false;
		}
	}, 100);

	function hasScrolled(){
		var st = $(this).scrollTop();
		if (Math.abs(lastScrollTop - st) <= delta)
			return;
		if (st > lastScrollTop && st > navbarHeight) {
			$('.header').removeClass('header_dw').addClass('header_up');
			//$('.section_btm_fixed').removeClass('btm');
			if ($('.section_btm_fixed').hasClass('active') == false){
				$('.section_btm_fixed .btn_wrap2').slideUp();
			}
			

			console.log('down');
		} else {
			if (st + $(window).height() < $(document).height()) {
				$('.header').removeClass('header_up').addClass('header_dw');
				//$('.section_btm_fixed').removeClass('btm');

				if ($('.section_btm_fixed').hasClass('active') == false){
					$('.section_btm_fixed .btn_wrap2').slideUp();
				}
				

				console.log('up');
			}
		}
		if (st == 0 || st == $(document).height() - $(window).height()) {
			$('.header').removeClass('header_up, header_dw');
			//$('.section_btm_fixed').addClass('btm');
			$('.section_btm_fixed .btn_wrap2').slideDown();

			console.log('?');
		}
		//$(".list_float").text("last:" + lastScrollTop + " , st:" + st + ", " );
		lastScrollTop = st;
		
	}
}

$(window).on('scroll', headerAni());
