jQuery(document).ready(function(){

	"use strict";
	
	//aali_tm_hero_image();
	aali_tm_jarallax();
	aali_tm_moving_animation();
});

 
/*JARALLAX*/

//jarallax
jQuery(document).ready(function(){
	"use strict";
	aali_tm_jarallax();
});
function aali_tm_jarallax(){
	"use strict";
jQuery('.jarallax').each(function(){
	var element			= jQuery(this);
	var	customSpeed		= element.data('speed');
		
	if(customSpeed !== "undefined" && customSpeed !== ""){
			customSpeed = customSpeed;
	}else{
		customSpeed 	= 0.5;
	}
		
	element.jarallax({
		speed: customSpeed,
		automaticResize: true,
		videoVolume: 0,
		});
	});
}
//end

/*MOVING ANIMATION*/

function aali_tm_moving_animation(){
	
	"use strict";
	
	var detail     	= $('.moving_effect');
	var offset		= 0;
	detail.each(function(){
		var element	= $(this);
		var direction = element.attr('data-direction');
		$(window).on('scroll',function(){
			offset  = $(window).scrollTop();
			var h	= $(window).height();
			var i	= element.offset().top - offset - h;
			if(element.attr('data-reverse') == 'yes'){
				i*= -1;
			}
			var x	= direction === 'x' ?  (i*70)/h : 0;
			var y 	= direction === 'x' ?  0 : (i*70)/h;
			if(element.attr('data-reverse') == 'yes'){
				i*= -1;
			}
			if((i*(-1))<h+300 && i<300){
				element.css({transform: 'translate3d('+x+'px, '+y+'px, 0px)'});
			}
		});
	});
}


/*tilt*/
    window.addEventListener('load', () => {
    tilter('.tilt-effect', {
    maxTilt: 6,
	easing: "cubic-bezier(.03,.98,.52,.99)",
	speed: 500,
	transition: true
      });
});
$(document).ready(function() {
  $('select').niceSelect();
});