$(document).ready(function() {

/*========================================*/
/*====  RESIZE DIV INFO  =================*/
/*========================================*/
	$('div.info').height(window.innerHeight);
	
		
    $(window).resize(function() {
        $('div.info').height(window.innerHeight);
//			if( $('.contact').is(":visible") ) {
//				var innerHeight = $('.panel section').outerHeight();
//				if(innerHeight < 700) { innerHeight = 700};
//				var height = $('.panel section').length * innerHeight;
//				
//				if(window.innerWidth > 480) {
//					if(height <= 900) { height = 900; } 
//				} else {
//					if(height <= 1200) { height = 1200; } 
//				}		 
//				$('.contact').height(height);
//			}
    });
	
	
/*========================================*/
/*====  INFO LINK  =======================*/
/*========================================*/	
	if(window.innerWidth < 480) {
		var r = '-100%';
	} else {
		var r = '-30%';
	}
	$('a.info').click(function() {
		var infoDiv = $(this).parents('section').children('div.info');		
		if( $(infoDiv).css("right") == '0px') {
			$('div.info').animate({ right: r }, 1000);
		} else {
			$(infoDiv).animate({ right: "0" }, 1000);
			$('div.info').not(infoDiv).animate({ right: r }, 1000);
		}
		return false;
	});
	
	$('.info_copy .close').click(function() {
		$(this).parents('div.info').animate({ right: r }, 1000);
		return false;
	});
	
});