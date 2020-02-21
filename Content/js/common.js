
$(window).on('load', function(){
	fixedBtmBody();
	fixedBtmPopup();

	tabActiveBar();
});


function tabActiveBar(){
	if ($('.tab_wrap.outer').length > 0){
		var btn = $('.tab_wrap.outer > .tab_tit a.active > span');
		var btnLft = $(btn).offset().left;
		var btnWdh = $(btn).outerWidth();
		$('.tab_wrap.outer > .tab_tit > .bar').animate({'left' : btnLft, 'width' : btnWdh}, 500, 'easeInOutQuart');
	}
}

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

			tabActiveBar();
		});
	});

	$('.list_tog_btn a').on('click', function(){
		var $btns = $(this).parent('li').siblings().find('a');
		$(this).addClass('active');
		$btns.removeClass('active');
	});

	$('.toggle_wrap > .toggle_top .btn_toggle').on('click', function(){
		var $toggle = $(this).closest('.toggle_wrap');
		var $togCon = $toggle.children('.toggle_con')
		if($(this).hasClass('open')){
			$(this).removeClass('open').addClass('close').text('접어보기');
			$togCon.slideDown(500, 'easeInOutQuart', function(){
				$toggle.addClass('active');
			});
			//$toggle.find('.toggle_con').slideDown(1000, "easeOutElastic");
		} else if($(this).hasClass('close')) {
			$(this).removeClass('close').addClass('open').text('펼쳐보기');
			$togCon.slideUp(500, 'easeInOutQuart', function(){
				$toggle.removeClass('active');
			});
			
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



























/*
var headerAni = function(){
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




$(function(){
	if ($('body').hasClass('fixedScroll')){
		btmAreaFixed();
	}

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




function btmAreaFixed(){
	var lastScrollTop = 0;
	$(window).on('scroll', function(){
		var wHgt = $(window).height();
		var dHgt = $(document).height();
		var sTop = $(this).scrollTop();

		if (sTop > lastScrollTop && sTop < dHgt - wHgt - 100){
			$('.section_btm_fixed .btn_wrap2').slideUp();


			console.log('down');
		} else {
			if (sTop + wHgt < dHgt && sTop < dHgt - wHgt - 100){
				if ($('.section_btm_fixed').hasClass('active') == false){
					$('.section_btm_fixed .btn_wrap2').slideUp();
				}
				
				console.log('up');
			}
		}

		if (sTop == dHgt - wHgt){
			$('.section_btm_fixed .btn_wrap2').slideDown();

			console.log('?');
		}

		var aaa = dHgt - wHgt;
		
		


		
		

		lastScrollTop = sTop;

		$('.fixedVal').text(sTop + ' , ' + dHgt + '-' + wHgt + '=' + aaa);
	});
}

