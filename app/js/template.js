jQuery(function($) {

	/* =============== SHOW / HIDE FORM SEARCH =============== */
	$("header .bike-search, #bike-searchForm .bike-close").click(function(){
		$("#bike-searchForm").toggleClass("open");
	});

	/* =============== SHOW / HIDE GOOGLE MAP =============== */
	$("#bike-map .bike-sectionHeading").click(function(){
		$("#bike-map").toggleClass("showMap");
		$(this).find(".text").toggle();
	});

	/* =============== TESTIMONIAL SLIDER =============== */
	$('.bike-testimonialSlider').unslider({
		nav: false,
		arrows: {
			//  Unslider default behaviour
			prev: '<a class="unslider-arrow prev"><i class="mdi mdi-chevron-left"></i></a>',
			next: '<a class="unslider-arrow next"><i class="mdi mdi-chevron-right"></i></a>',
		}
	});

	/* =============== CUSTOM SCROLLBAR STYLE =============== */
	$("#bike-whatWeDo .panel-body").mCustomScrollbar({
		theme:"default"
	});

	/* =============== MAKE MAIN MENU STICKED ON TOP WHEN SCROLL =============== */
	$(window).scroll(function () {
		if ($(this).scrollTop() == $('#bike-header').height() || $(this).scrollTop() > $('#bike-header').height()) {
			$('body').addClass("bike-fixed-nav");
			$('body').css('padding-top', $('#bike-navbar').height() + 'px');
		} else {
			$('body').removeClass("bike-fixed-nav");
			$('body').css('padding-top', 0);
		}
	});

	/* =============== ISOTOP =============== */
	$(window).load(function(){
		$portfolio = $('.bike-portfolioItems');
		$portfolio.isotope({
			itemSelector : 'li',
			layoutMode : 'masonry'
		});
	});

	/* =============== PORTFOLIO HOVER EFFECT =============== */
	$('.bike-portfolioItems > li').each( function() { $(this).hoverdir(); } );


	/* =============== SMOOTH SCROOL EFFECT =============== */
	$('.bike-menuItem ul li a').on('click',function (e) {
	    e.preventDefault();
	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 500, 'swing', function () {
	        window.location.hash = target;
	    });
	});

	/* =============== SHOW / HIDE GO TO TOP =============== */
	/* Check to see if the window is top if not then display go top button */
	$(window).scroll(function(){
		if ($(this).scrollTop() > 200) {
			$('#bike-scrollToTop').fadeIn();
		} else {
			$('#bike-scrollToTop').fadeOut();
		}
	});
	/* Click event to scroll to top */
	$('#bike-scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
});