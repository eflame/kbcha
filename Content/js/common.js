
$(window).on('load', function(){
	fixedBtmBody();
	fixedBtmPopup();

	tabActiveBar();
	inputRange();
	btnRange();
});

function tabActiveBar(){
	if ($('.tab_wrap.outer').length > 0){
		var btn = $('.tab_wrap.outer > .tab_tit a.active > span');
		var btnLft = $(btn).offset().left;
		var btnWdh = $(btn).outerWidth();
		$('.tab_wrap.outer > .tab_tit > .bar').animate({'left' : btnLft, 'width' : btnWdh}, 500, 'easeInOutQuart');
	}
}

function inputRange(){
	if ($('input[type=range]').length > 0){
		$('input[type=range]').each(function(){
			var val = $(this).val();
			$(this).css('background', 'linear-gradient(to right, #ffba00 0%, #ffba00 '+ val +'%, #DDD ' + val + '%, #DDD 100%)');
		})
	}
}

function btnRange(){
	$('.list_graph_btn').each(function(){
		$menu = $(this).find('li');
		num = parseInt($menu.length) - 1;
		wdh = 100 / num;
		wdh2 = wdh / 2;

		$menu.css({'width' : wdh + '%'});
		$(this).find('li:first-child, li:last-child').css({'width' : wdh2 + '%'});
	})
	
}

$(function(){  
	//input : range
	$('input[type=range]').on('input', function(){
		inputRange();
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

	$('.list_graph_btn a').on('click', function(){
		var $btns = $(this).parent('li').siblings().find('a');
		var $prvBtn = $(this).parent('li').prevAll().find('a');
		var $nxtBtn = $(this).parent('li').nextAll().find('a');
		$(this).addClass('active on');
		$prvBtn.addClass('on');
		$nxtBtn.removeClass('on');
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


























$(function(){
	if ($('body').hasClass('fixedScroll')){
		fixedScroll();
	}
	$('.section_btm_fixed .btn_toggle').on('click',function(){
		fixedBtmState('step3');
	});
});

function fixedBtmState(state){
	var state;
	var $fixedArea = $('.section_btm_fixed');
	var $prList = $fixedArea.find('.price_list');
	var $btWrap = $fixedArea.find('.btn_wrap2');
	
	if (state == 'step1'){
		console.log('1');
	} else if (state == 'step2'){
		console.log('2');
		if ($fixedArea.hasClass('btm')){
			$btWrap.slideDown();
		} else {
			$btWrap.slideUp();
		}
	} else if (state == 'step3'){
		console.log('3');

		if ($fixedArea.hasClass('active')){
			$fixedArea.removeClass('active');
			if ($fixedArea.hasClass('btm')){
				//$btWrap.slideDown();
			} else {
				$btWrap.slideUp();
				$prList.slideUp();
			}
		} else {
			$fixedArea.addClass('active');
			$prList.slideDown();
			if ($btWrap.css('display') != 'block'){
				$btWrap.slideDown();
			}
		}
	} else {
		console.log('4');
	}
}
 
function fixedScroll(){
	var lastScrollTop = 0;
	var didScroll = true;
	var dist = 80;
	
	$(window).on('scroll', function(){
		var wHgt = Math.ceil($(window).height());
		var dHgt = Math.ceil($(document).height());
		var sTop = Math.ceil($(this).scrollTop());

		if (sTop >= dHgt - wHgt - dist && didScroll){
			didScroll = false;
			$('.section_btm_fixed').addClass('btm');
			fixedBtmState('step2');
		} else if (sTop < dHgt - wHgt - dist && didScroll == false){
			didScroll = true;
			$('.section_btm_fixed').removeClass('btm');
			fixedBtmState('step2');
		}
		lastScrollTop = sTop;
	});
}
/*
function btmAreaFixed(){
	var lastScrollTop = 0;
	$(window).on('scroll', function(){
		var wHgt = $(window).height();
		var dHgt = $(document).height();
		var sTop = $(this).scrollTop();

		var aaa = dHgt - wHgt;

		if (sTop > lastScrollTop && sTop < dHgt - wHgt - 77 ){
			$('.section_btm_fixed .btn_wrap2').slideUp();
				// console.log('down');
		} else {
			if (sTop + wHgt < dHgt && sTop < dHgt - wHgt - 77) {
				if ($('.section_btm_fixed').hasClass('active') == false){
					$('.section_btm_fixed .btn_wrap2').slideUp();
				}
				// console.log('up');
			}
		}
		if (sTop >= dHgt - wHgt - 77){
			$('.section_btm_fixed .btn_wrap2').slideDown();
			// console.log('?');
		}

		lastScrollTop = sTop;
		$('.fixedVal').text(sTop + ' , ' + dHgt + '-' + wHgt + '=' + aaa);
	});
}
*/
