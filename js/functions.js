$(document).ready(function() {
//	$('.contact').hide();	   
/*========================================*/
/*====  CONTACT LINK  ====================*/
/*========================================*/
//		$('.contact_link').click(function() {
//			var innerHeight = $('.panel section').outerHeight();
//			if(innerHeight < 700) { innerHeight = 700};
//			var height = $('.panel section').length * innerHeight;
//			
//			if(window.innerWidth > 480) {
//				if(height <= 900) { height = 900; } 
//			} else {
//				if(height <= 1200) { height = 1200; } 
//			}
//			$('.contact').css({display: 'block'}).animate({height: height}, 500);
//			$(window).scrollTop(0);
//			return false;
//		});
//		$('.close').click(function() {
//			$('.contact').slideUp(500);
//			return false;
//		});



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
	
	
	
/*========================================*/
/*====  CONTACT FORM INPUTS  =============*/
/*========================================*/	
//	if($.browser.msie) {
//		$(':text').each(function() {
//			$(this).val( $(this).attr('placeholder') );
//		});
//		
//		$(':text').focus(function() {
//			var current = $(this).val(); 
//			var place = $(this).attr('placeholder');
//			if(current = place) {
//				$(this).val('');
//			}
//		}).blur(function() {
//			var current = $(this).val(); 
//			var place = $(this).attr('placeholder');
//			if( current == "") {
//				$(this).val(place);
//			}
//		});
//
//	}
//	$('#message').focus(function() {
//			var current = $(this).val();
//			if(current == "Message") {
//				$(this).val('');
//			}
//		}).blur(function() {
//			var current = $(this).val();
//			if( current == "") {
//				$(this).val("Message");
//			}
//		});
//	
//	
//	var frmvalidator  = new Validator("contactus");
//    frmvalidator.EnableOnPageErrorDisplay();
//    frmvalidator.EnableMsgsTogether();
//    frmvalidator.addValidation("name","req","Please provide your name");
//    frmvalidator.addValidation("email","req","Please provide your email address");
//    frmvalidator.addValidation("email","email","Please provide a valid email address");
//    frmvalidator.addValidation("message","maxlen=2048","The message is too long!(more than 2KB!)");
//	
//	
//	var options = {
//		dataType: 'json',
//		success: showResponse
//	}
//	$('#contactus').ajaxForm(options);
//});
//
//function showResponse(responseText, statusText, xhr, $form)  {	
//	$('#response').html(responseText);
//	if(responseText == "Thanks!  I will follow up shortly") {
//		$('#contactus').clearForm();
//	}
}