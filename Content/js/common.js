
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
			console.log('a');
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















$(function(){
	$("a.btn_accodion").on('click',function(){
		$(this).siblings(".price_list").slideToggle(300);
	});
	// function myFunction(event) {
	// 	var windowHeight = $( window ).height(); //디바이스 크기
	// 	var y = event.touches[0].screenY; //터치이벤트 위치값
	// 	alert(y);
	// }
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
