(function ($) {
	'use strict';
	var mySwiper = new Swiper ('.swiper-container', {
		direction: 'vertical',
		loop: true,
		speed: 700,
		paginationClickable: true,
		mousewheelControl: false,
		hashnav: true,
		replaceState: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});
	var indicator = new WheelIndicator({
		elem: document.querySelector('.swiper-container'),
		callback: function(e){
			if(e.direction == 'up') mySwiper.slidePrev();
			else mySwiper.slideNext();
		}
	});
})(jQuery);