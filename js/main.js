/*----------------------------------------------------------------

	Template Name: Rainfo - Minimal Creative Portfolio for Freelancers & Agencies 
	Version: 1.0

-------------------------------------------------------------------------*/

/**************************************************************
	
	Main Js Activation
	01. Wow Active 
	02. Slider Activation
	03. Mainmenu Css 
	04. Award Hover Change
	05. Blog Hover Change
	06. Service Hover Change
	07. OnePageNav JS
	08. Tilt Hover Activation
	09. BacK To Top
	10. Parallax Activation
	11. Slider Activation
	12. Mainmenu Activation
	13. Portfolio Masonary Activation
	14. Header Search Activation 

	
	__ End Js Activation

***************************************************************/


(function ($) {
	'use strict';

	$(window).on('load', function() {
	    rnPrealoaderSetup();
	});

	/*========================
		01. Wow Active 
	==============================*/

	new WOW().init();


	/*===========================
		02. Slider Activation 
	==============================*/

	const up = $('.nav-up');
	const down = $('.nav-down');
	let counter = 1;
	let number = $('.number');

	function moveDown(currentSlide) {
		var nextSlide = currentSlide.next();
		var currentSlideUp = currentSlide.find('.txt');

		var currentSlideDown = currentSlide.find('.img');
		var nextSlideUp = nextSlide.find('.img');

		var nextSlideDown = nextSlide.find('.txt');

		let currentCopy = currentSlide.find('.copy');
		let nextCopy = nextSlide.find('.copy');

		let currentCopy2 = currentSlide.find('.copy2');
		let nextCopy2 = nextSlide.find('.copy2');

		let currentCopy3 = currentSlide.find('.copy3');
		let nextCopy3 = nextSlide.find('.copy3');

		if (nextSlide.length !== 0) {
			counter = counter + 1;
			if (counter % 2 === 0) {
				TweenMax.to(number, 0.3, { x: '-100%' })
				TweenMax.to(currentSlideUp, 0.4, { y: '-100%', delay: 0.15 });
				TweenMax.to(currentSlideDown, 0.4, { y: '100%', delay: 0.15 });
				setTimeout(function () { number.html('') }, 300);

			} else {
				number.html('0' + counter);
				TweenMax.to(number, 0.3, { x: '0%', delay: 1 })
				TweenMax.to(currentSlideUp, 0.4, { y: '100%', delay: 0.15 });
				TweenMax.to(currentSlideDown, 0.4, { y: '-100%', delay: 0.15 });
			}

			TweenMax.to(nextSlideUp, 0.4, { y: '0%', delay: 0.15 });
			TweenMax.to(nextSlideDown, 0.4, { y: '0%', delay: 0.15 });
			$(currentSlide).removeClass('active');
			$(nextSlide).addClass('active');

		}
	}

	function moveUp(currentSlide) {
		var prevSlide = currentSlide.prev();
		var currentSlideUp = currentSlide.find('.img');
		var currentSlideDown = currentSlide.find('.txt');
		var prevSlideUp = prevSlide.find('.txt');
		var prevSlideDown = prevSlide.find('.img');

		let currentCopy = currentSlide.find('.copy');
		let prevCopy = prevSlide.find('.copy');

		let currentCopy2 = currentSlide.find('.copy2');
		let prevCopy2 = prevSlide.find('.copy2');

		let currentCopy3 = currentSlide.find('.copy3');
		let prevCopy3 = prevSlide.find('.copy3');

		if (prevSlide.length !== 0) {
			counter = counter - 1;
			if (counter % 2 === 0) {
				TweenMax.to(number, 0.3, { x: '-100%' });
				TweenMax.to(currentSlideUp, 0.4, { y: '-100%', delay: 0.15 });
				TweenMax.to(currentSlideDown, 0.4, { y: '100%', delay: 0.15 });
				setTimeout(function () { number.html('') }, 300);
			} else {
				number.html('0' + counter);
				TweenMax.to(number, 0.3, { x: '0%', delay: 1 })
				TweenMax.to(currentSlideUp, 0.4, { y: '100%', delay: 0.15 });
				TweenMax.to(currentSlideDown, 0.4, { y: '-100%', delay: 0.15 });
			}

			TweenMax.to(prevSlideUp, 0.4, { y: '0%', delay: 0.15 });
			TweenMax.to(prevSlideDown, 0.4, { y: '0%', delay: 0.15 });
			$(currentSlide).removeClass('active');
			$(prevSlide).addClass('active');
		}
	}


	function hideNav() {
		if (counter == $('.slide').length) {
			TweenMax.to($('.nav-down'), 0.5, { autoAlpha: 0, delay: 0.5 });
		} else {
			TweenMax.to($('.nav-down'), 0.5, { autoAlpha: 1, delay: 0.5 });
		}
		if (counter === 1) {
			TweenMax.to($('.nav-up'), 0.5, { autoAlpha: 0, delay: 0.5 });
		} else {
			TweenMax.to($('.nav-up'), 0.5, { autoAlpha: 1, delay: 0.5 });
		}
	}
	down.on('click', function () {
		var currentSlide = $('.active');
		moveDown(currentSlide);
		hideNav();
	});

	up.on('click', function () {
		var currentSlide = $('.active');
		moveUp(currentSlide);
		hideNav();
	});



	/* ===========================
		03. Mainmenu Css 
	============================*/

	CSSPlugin.defaultTransformPerspective = 600;
	var toggleMenu = $('.menu-toggle');
	var toggwrapper = $('.menu-section');

	var listItems = $('ul#menu li');
	var timeline = new TimelineMax({ paused: true, reversed: true });

	timeline.staggerFromTo(toggwrapper, 0.5, { y: "-100%"}, { y: "0%"}, 0.5);

	timeline.staggerFromTo(listItems, 0.3, { autoAlpha: 0, Y: 20, transformOrigin: '50% 0%' },
		{ autoAlpha: 1, Y: 0 }, 0.1);

	toggleMenu.on('click', function (e) {
		e.preventDefault();
		$(this).toggleClass('open');
		$('.menu-section').toggleClass('.menu-open');
		timeline.reversed() ? timeline.play() : timeline.reverse()
	});



	/* ==========================
		04. Award Hover Change
	=============================*/

	function hoverImageChange() {
		$('.rn-award-list li a').on('mouseover', function () {
			var image = $(this).data('image');
			$('.rn-award-list li a').removeClass('is-active');
			$(this).addClass('is-active');
			$('.rn-images-bg-wrapper').css({ 'background-image': 'url("' + image + '")', 'transition': '0.5s' });
		});

	}
	hoverImageChange();


	/* ==========================
		05. Blog Hover Change
	=============================*/

	function blogImageChange() {
		$('.rn-blog h2 a').on('mouseover', function () {
			var images = $(this).data('images');
			$('.rn-blog h2 a').removeClass('is-active');
			$(this).addClass('is-active');

			$('.rn-blog-wrapper').css({ 'background-image': 'url("' + images + '")', 'transition': '0.5s' });

		});

	}
	blogImageChange();


	/* ==========================
		06. Service Hover Change
	=============================*/

	function serviceImageChange() {
		$('.service h4 a').on('mouseover', function () {
			var images = $(this).data('images');
			$('.service h4 a').removeClass('is-active');
			$(this).addClass('is-active');
			$('.rn-service-bg-wrapper').css({ 'background-image': 'url("' + images + '")', 'transition': '0.5s' });
		});
	}
	serviceImageChange();


	/* ==========================
		07. OnePageNav JS
	=============================*/

	$('#menu').onePageNav({
		currentClass: 'active',
		changeHash: false,
		scrollSpeed: 750,
		scrollThreshold: 0.5,
		filter: '',
		easing: 'swing',
		offsetHeight: 0,
	});

	$('#menu2').onePageNav({
		currentClass: 'active',
		changeHash: false,
		scrollSpeed: 750,
		scrollThreshold: 0.5,
		filter: '',
		easing: 'swing',
		offsetHeight: 0,
	});


	/* =============================
		08. Tilt Hover Activation
	================================*/

	$('.portfolio').tilt({
		maxTilt: 15,
		perspective: 1400,
		easing: 'cubic-bezier(.03,.98,.52,.99)',
		speed: 1200,
		glare: true,
		maxGlare: 0.2,
		scale: 1.04
	});


	/* ==========================
		09. BacK To Top
	=============================*/

	function BackToTop() {
		//Click event to scroll to top
		$('.scrolltotop').on('click', function () {
			$('html, body').animate({ scrollTop: 0 }, 800);
			return false;
		});

		$('#gotomap').on('click', function () {
			$('html, body').animate({ scrollTop: $('#main').offset().top - 100 }, 800);
			return false;
		});

	}
	BackToTop();

	/*===========================
		10. Parallax Activation
	=============================*/

	function stellarParallax() {
		if ($(window).width() > 1024) {
			$.stellar();
		} else {
			$.stellar('destroy');
			$('.parallax').css('background-position', '');
		}
	}

	function SetResizeContent() {
		stellarParallax();
	}
	SetResizeContent();


	/*===========================
		11. Slider Activation
	=============================*/

	$('.slider-activation-with-slick').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		centerMode: false,
		focusOnSelect: true,
		arrows: true,
		prevArrow: '<button class="rf-slide-prev"><i class="ti-angle-left"></i></button>',
		nextArrow: '<button class="rf-slide-next"><i class="ti-angle-right"></i></button>',
	});

	$('.slider-activation-withouticon').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		centerMode: false,
		focusOnSelect: true,
		arrows: false,
	});


	/*=====================================
		12. Mainmenu Activation
	=========================================*/

	$('nav.mobilemenu__nav').meanmenu({
		meanMenuClose: 'X',
		meanMenuCloseSize: '18px',
		meanScreenWidth: '991',
		meanExpandableChildren: true,
		meanMenuContainer: '.mobile-menu',
		onePage: true
	});

	/* =====================================
		13. Portfolio Masonary Activation 
	=========================================*/

	$('.rp-product-container').imagesLoaded(function () {

		// filter items on button click
		$('.rp_portfolio_menu').on('click', 'button', function () {
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({ filter: filterValue });
		});
		// init Isotope
		var $grid = $('.portfolio-list').isotope({
			itemSelector: '.single-pro',
			percentPosition: true,
			transitionDuration: '0.7s',
			layoutMode: 'fitRows',
			masonry: {
				// use outer width of grid-sizer for columnWidth
				columnWidth: 1,
			}
		});

	});

	$('.rp_portfolio_menu button').on('click', function (event) {
		$(this).siblings('.is-checked').removeClass('is-checked');
		$(this).addClass('is-checked');
		event.preventDefault();
	});



	$('.rp-product-container5').imagesLoaded(function () {
		// filter items on button click
		$('.rp_portfolio_menu5').on('click', 'button', function () {
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({ filter: filterValue });
		});
		// init Isotope
		var $grid = $('.portfolio-list5').isotope({
			itemSelector: '.single-pro5',
			percentPosition: true,
			transitionDuration: '0.7s',
			layoutMode: 'fitRows',
			masonry: {
				// use outer width of grid-sizer for columnWidth
				columnWidth: 1,
			}
		});

	});

	$('.rp_portfolio_menu5 button').on('click', function (event) {
		$(this).siblings('.is-checked').removeClass('is-checked');
		$(this).addClass('is-checked');
		event.preventDefault();
	});

	/*---------------------------
		Portfolio New 
	-----------------------------*/

	$('.rn-portfolio-area').imagesLoaded(function () {
		// filter items on button click
		$('.rp_portfolio_menu-new').on('click', 'button', function () {
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({ filter: filterValue });
		});
		// init Isotope
		var $grid = $('.portfolio-new').isotope({
			itemSelector: '.single-pro',
			percentPosition: true,
			transitionDuration: '0.7s',
			masonry: {
				// use outer width of grid-sizer for columnWidth
				columnWidth: 1,
			}
		});

	});

	$('.rp_portfolio_menu-new button').on('click', function (event) {
		$(this).siblings('.is-checked').removeClass('is-checked');
		$(this).addClass('is-checked');
		event.preventDefault();
	});


	/*======================================
		14. Header Search Activation 
	========================================*/
	function searchActive() {
		$('.rf-search').on('click', function (e) {
			e.preventDefault();
			$('.search-popup').toggleClass('is-visible');
		});

		$('.search-popup .close').on('click', function (e) {
			e.preventDefault();
			$(this).parents('.search-popup').removeClass('is-visible');
		});
	}
	searchActive();


	/*======================================
	15.	Close Button
	========================================*/
	$('.icon-on-hover').on('click', function(){
		$(this).toggleClass('focus');
		$('.social-icon.hover-icon').toggleClass('show');
	});

	/*================================
	16.	Multiscroll Navigator
	==================================*/
	$("#multiscroll-nav ul li a").append("some new");

	/*=====================================
	17.	Preloader
	=======================================*/
	function rnPrealoaderSetup() {
		var rnPre = $('#rn-preloader-wrap');
		var isPhone = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
	    if (!isPhone) {
	        setTimeout(function() {
	            rnPre.addClass('rn-preloaded');
	        }, 900);
	        setTimeout(function() {
	            rnPre.remove();
	        }, 2000);

	    } else {
	        rnPre.remove();
	    }
	}

	// Select all links with hashes
	$('a[href*="#"]')
	  // Remove links that don't actually link to anything
	  .not('[href="#"]')
	  .not('[href="#0"]')
	  .on('click', function(event) {
	    // On-page links
	    if (
	      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
	      && 
	      location.hostname == this.hostname
	    ) {
	      // Figure out element to scroll to
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	      // Does a scroll target exist?
	      if (target.length) {
	        // Only prevent default if animation is actually gonna happen
	        event.preventDefault();
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1000, function() {
	          // Callback after animation
	          // Must change focus!
	          var $target = $(target);
	          $target.focus();
	          if ($target.is(":focus")) { // Checking if the target was focused
	            return false;
	          } else {
	            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
	            $target.focus(); // Set focus again
	          };
	        });
	      }
	    }
	  });


	  /**
	  * easeScroll
	  */
	  $("body").easeScroll({
	  	frameRate: 60,
	  	animationTime: 1500,
	  	stepSize: 100,
	  	pulseAlgorithm: !0,
	  	pulseScale: 8,
	  	pulseNormalize: 1,
	  	accelerationDelta: 20,
	  	accelerationMax: 1,
	  	keyboardSupport: !0,
	  	arrowScroll: 50
	  });

})(jQuery);
