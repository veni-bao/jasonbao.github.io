/*********************************************************************************

    Template Name: Hypno Personal Creative Portfolio HTML5 Template  
    Description: Hypno is a beautifula and unique multipurpose Bootstrap 4 template.
    Version: 1.0
    Note: This is style css.

**********************************************************************************/


/*===============================================================================
			[ INDEX ]
=================================================================================

    Wow Activation
    Scroll Up Activation
    Gallery Mesonry Activation 
    Blog Activation
    Product Activation
    Blog Thumb Activation
    Portfolio Activation
    Submenu Activation
    Piechart Activation
    Tilt Hover Effects
    Setting Option
    Scrol Down


=================================================================================
			[ END INDEX ]
================================================================================*/

(function($) {
	'use strict';



/*============ Wow Activation ============*/

    new WOW().init();




/*============ Scroll Up Activation ============*/
	$.scrollUp({
	    scrollText: '<i class="ti-angle-up"></i>',
	    easingType: 'linear',
	    scrollSpeed: 900,
	    animation: 'slide'
	});



/*=============  Gallery Mesonry Activation  ==============*/

    $('.gallery__masonry__activation').imagesLoaded(function () {

        // filter items on button click
        $('.gallery__menu').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
              filter: filterValue
            });
        });

        // change is-checked class on buttons
        $('.gallery__menu button').on('click', function () {
            $('.gallery__menu button').removeClass('is-checked');
            $(this).addClass('is-checked');
            var selector = $(this).attr('data-filter');
            $containerpage.isotope({
              filter: selector
            });
            return false;
        });

        // init Isotope
        var $grid = $('.masonry__wrap').isotope({
            itemSelector: '.gallery__item',
            percentPosition: true,
            transitionDuration: '0.7s',
            masonry: {
              // use outer width of grid-sizer for columnWidth
              columnWidth: '.gallery__item',
            }
        });
    });



/*=============  Blog Activation  ==============*/

    var $container = $('.blog__meso__wrap');
    $container.imagesLoaded( function () {
        $container.masonry({
            columnWidth: 1,
            itemSelector: '.blog__item'
        });
    });
    
    //Reinitialize masonry inside each panel after the relative tab link is clicked - 
    $('a[data-toggle=tab]').each(function () {
        var $this = $(this);

        $this.on('shown.bs.tab', function () {
        
            $container.imagesLoaded( function () {
                $container.masonry({
                    columnWidth: 1,
                    itemSelector: '.blog__item'
                });
            });

        }); 
    }); 

/*=============  Blog Thumb Activation  ==============*/

    $(".thumb__owl").owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        autoplay: false,
        autoplayTimeout: 10000,
        items:1,
        navText: ['<span class="ti-angle-double-left"></span>', '<span class="ti-angle-double-right"></span>' ],
        dots: false,
        lazyLoad: true,
        responsive:{
            0:{
              items:1
            },
            1920:{
              items:1
            }
        }
    });


/*=============  Portfolio Activation  ==============*/

    $('.activation--1').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    autoplay: false,
    autoplayTimeout: 10000,
    items:4,
    navText: ['<span class="ti-angle-double-left"></span>', '<span class="ti-angle-double-right"></span>' ],
    dots: false,
    lazyLoad: true,
    responsive:{
        0:{
          items:1
        },
        576:{
          items:2
        },
        768:{
          items:2
        },
        992:{
          items:3
        },
        1920:{
          items:4
        }

        }
    });



/*=============  Submenu Activation  ==============*/

$('#nipa').ScrollSubMenu();



/*=============  Piechart Activation  ==============*/

$('.piechart').circles({
    initialPos: 0,
    targetPos: 80,
    showProgress: 1,
    scale: 110,
});



/*=============  Tilt Hover Effects  ==============*/

 
(function() {
    var tiltSettings = [
    {},
    {
        movement: {
            imgWrapper : {
                rotation : {x: -5, y: 10, z: 0},
                reverseAnimation : {duration : 50, easing : 'easeOutQuad'}
            },
            caption : {
                translation : {x: 20, y: 20, z: 0},
                reverseAnimation : {duration : 200, easing : 'easeOutQuad'}
            },
            overlay : {
                translation : {x: 5, y: -5, z: 0},
                rotation : {x: 0, y: 0, z: 6},
                reverseAnimation : {duration : 1000, easing : 'easeOutQuad'}
            },
            shine : {
                translation : {x: 50, y: 50, z: 0},
                reverseAnimation : {duration : 50, easing : 'easeOutQuad'}
            }
        }
    }];

    function init() {
        var idx = 0;
        [].slice.call(document.querySelectorAll('.tilter')).forEach(function(el, pos) { 
            idx = pos%2 === 0 ? idx+1 : idx;
            new TiltFx(el, tiltSettings[idx-1]);
        });
    }

    // Preload all images.
    $('.tilter').imagesLoaded(function () {
        init();
    });

})();


/*============= Setting Option ==============*/


    function menuOption() {
        var menutoggle = $('.mainmenu__icon a');
        var closeBtn = $('.close__btn a');

        menutoggle.on('click', function (e) {
            e.preventDefault();

          $('.popup__menu').toggleClass('is-visible');

        });

        closeBtn.on('click', function (e) {
            e.preventDefault();

          $('.popup__menu').removeClass('is-visible');

        });



    }
    menuOption();



/*============= Scrol Down ==============*/


    $('a[href*="#"]:not([href="#"])').click(function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
       var target = $(this.hash);
       target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
       if (target.length) {
        $('html, body').animate({
         scrollTop: target.offset().top - 0
        }, 1000);
        return false;
       }
      }
     });





})(jQuery);
