;(function($) {
    "use strict";
  
    /*----------------------------------------------------*/
    /*  Menu scroll js
    /*----------------------------------------------------*/
    var nav_offset_top = $('.header_area').offset().top;
    function stickyHeader() {
		if ($('.header_area').length) {
			var strickyScrollPos = nav_offset_top;
			if($(window).scrollTop() > strickyScrollPos) {
				$('.header_area').removeClass('fadeIn animated');
				$('.header_area').addClass('stricky-fixed fadeInDown animated')
			}
			else if($(window).scrollTop() <= strickyScrollPos) {
				$('.header_area').removeClass('stricky-fixed fadeInDown animated');
				$('.header_area').addClass('slideIn animated')
			}
		}
	}
    
    // instance of fuction while Window Scroll event
	$(window).on('scroll', function () {	
		stickyHeader()
	})
    
    /*----------------------------------------------------*/
    /*  Skill js
    /*----------------------------------------------------*/
    $(".skill_item_inner").each(function() {
        $(this).waypoint(function() {
            var progressBar = $(".progress-bar");
            progressBar.each(function(indx){
                $(this).css("width", $(this).attr("aria-valuenow") + "%")
            })
        }, {
            triggerOnce: true,
            offset: 'bottom-in-view'

        });
    });
    
    
    /*----------------------------------------------------*/
    /*  Google map js
    /*----------------------------------------------------*/
    
    if ( $('#mapBox').length ){
        var $lat = $('#mapBox').data('lat');
        var $lon = $('#mapBox').data('lon');
        var $zoom = $('#mapBox').data('zoom');
        var map = new GMaps({
            el: '#mapBox',
            lat: $lat,
            lng: $lon,
            scrollwheel: false,
            scaleControl: true,
            streetViewControl: false,
            panControl: true,
            disableDoubleClickZoom: true,
            mapTypeControl: false,
            zoom: $zoom,
                styles: [{"featureType":"administrative.country","elementType":"geometry","stylers":[{"visibility":"simplified"},{"hue":"#ff0000"}]}]
            });
        
        }
    
        
  
    
    $('.header_area .nav.navbar-nav li a[href^="#"]:not([href="#"])').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 80
        }, 1500);
        event.preventDefault();
    });
    
    
    function bodyScrollAnimation() {
        var scrollAnimate = $('body').data('scroll-animation');
        if (scrollAnimate === true) {
            new WOW({
                mobile: false
            }).init()
        }
    }
    bodyScrollAnimation();
    
    
    // preloader js
    $(window).load(function() { // makes sure the whole site is loaded
		$('#preloader_spinner').fadeOut(); // will first fade out the loading animation
		$('#preloader').delay(150).fadeOut('slow'); // will fade out the white DIV that covers the website.
		$('body').delay(150).css({'overflow':'visible'})
    })
    
    
})(jQuery)
