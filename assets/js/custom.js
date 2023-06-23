/*=========


Template Name: DashCode -  HTML Template

=========*/

/*=========
----- JS INDEX -----

=========*/

$(document).ready(function($) {

	// Whole Script Strict Mode Syntax
	"use strict";
    $("[data-background").each(function() {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    });

	    // Sticky Header JS Start
		$(window).on( 'scroll', function(){
			if ($(window).scrollTop() >= 100) {
				$('.header-area').addClass('sticky-header');
			}
			else {
				$('.header-area').removeClass('sticky-header');
			}
		});
	var a = 0;
	var b = 0;
	$(window).on('scroll', function() {

	// Counting JS Start
		var oTop = $('#counter').offset().top - window.innerHeight;
		if (a === 0 && $(window).scrollTop() > oTop) {
			$('.counting-data').each(function() {
			  var $this = $(this),
			      countTo = $this.attr('data-count');
			  
			  $({ countNum: $this.text()}).animate({
			    countNum: countTo
			  },

			  {

			    duration: 3000,
			    easing:'linear',
			    step: function() {
			      $this.text(Math.floor(this.countNum));
			    },
			    complete: function() {
			      $this.text(this.countNum);
			    }

			  });  
			  
			});
		a = 1;
	  	}
	// Counting JS End

	});
		// banner carousel JS Start
// 		$('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:0,
// 		dots: false,
// 		nav: true,
// 		navText : [
// 				'<i class="fas fa-chevron-left"></i>',
// 				'<i class="fas fa-chevron-right"></i>'
// 		],
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:2
//         },
//         1000:{
//             items:2
//         }
//     }
// })

$("[data-toggle=\"tooltip\"]").tooltip();
$("input.slider").on("input change", function(event) {
	var element = $(this).parents("div.banner-slider");
	var pos = event.target.value;
	
	element.find("div.before").css({width: pos + "%"});
	element.find("div.slider-button").css({left: "calc(" + pos + "% - 18px)"});
});

// isotube
// init Isotope
// external js: isotope.pkgd.js

// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.element-item',
  layoutMode: 'fitRows',
  percentPosition:true,
  filter: '.grid-two'
});
// filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function() {
    var number = $(this).find('.number').text();
    return parseInt( number, 10 ) > 50;
  },
  // show if name ends with -ium
  ium: function() {
    var name = $(this).find('.name').text();
    return name.match( /ium$/ );
  }
};
// bind filter button click
$('.filters-button-group').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});
// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});
		// banner carousel JS Start
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
		dots: true,
		nav: false,

    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})

  
});