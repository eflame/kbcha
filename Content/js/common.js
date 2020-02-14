
$(function () {
	$('input[type=range]').on('input', function(){
		var val = $(this).val();
		$(this).css('background', 'linear-gradient(to right, #ffba00 0%, #ffba00 '+ val +'%, #DDD ' + val + '%, #DDD 100%)');
	});

	//tab : event
	$('.tab_wrap').each(function () {
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

	//tab : 탭안에탭
	$('.layerInnerTab').each(function () {
		$(this).find('.tab_inner_tit li button, .tab_inner_tit li a').each(function (i) {
			$(this).parent().attr('idx', i);
		}).on('click', function(){
			var n = $(this).parent().attr('idx');
			$tab = $(this).parents('.layerInnerTab');
			$(this).addClass('active').parent('li').siblings().find('a, button').removeClass('active');
			$tab.find('.tab_inner_con_wrap .tab_inner_con').removeClass('active');
			$tab.find('.tab_inner_con_wrap .tab_inner_con').eq(n).addClass('active'); //focus() 삭제함(고객센터문제)
		});
	});
});






/***********************************************
	* 함수
************************************************/
