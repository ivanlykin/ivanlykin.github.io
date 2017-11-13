$(document).ready(function(){

	jQuery(function($) {
	    $(window).scroll(function(){
	        if($(this).scrollTop()>$(window).height()-75){
	            $('header').addClass('fixed');
	            $('header').css('margin-top', '0');
	        }
	        else if ($(this).scrollTop()<$(window).height()){
	            $('header').removeClass('fixed');
	            $('header').css('margin-top', '-75px');
	        }
	    });
	});

	if(document.getElementsByTagName('header').length===1){
		$('#menu').on("click",".scroll", function (event) {
		    event.preventDefault();
	        var top, id  = $(this).attr('href');
	        if (id=='#contacts') {
	        	top = $(id).offset().top-55;
	        }else{
	        	top = $(id).offset().top-170;
	        }	        
	        $('body,html').animate({scrollTop: top}, 1500);
    	});
	}

	$('.close-team').click (function(){
		$('.full_team').slideUp(800);
		ntop = $(this).offset().top-430;
		$('body,html').animate({scrollTop: ntop}, 500);
	});

    $('.folio-more').click(function(){
		var n  = $(this).attr('id');
		n='#full_'+n;
		$('.full_team').css('display','none');
		$(n).slideDown(800);
		ntop = $(n).offset().top-70;
		$('body,html').animate({scrollTop: ntop}, 500);
	});

	$('.small-photo').click(function(){
		var n  = $(this).attr('id');
		n='#full_tea'+n;
		$('.full_team').css('display','none');
		$(n).slideDown(800);
		ntop = $(n).offset().top-70;
		$('body,html').animate({scrollTop: ntop}, 500);
	});

    $('#about span').click(function(){
		$('.about-more').delay(100).slideDown(500);
		$('#about span').fadeOut('fast');
	});

	$('.pro-link').click(function(){
		$('.tweet-news').hide();
		$('.tweet').hide();
		$('.inst').hide();
		$('.inst-news').hide();
		$('.item-news').delay(500).fadeIn(500);
	});

	$('.social-link').click(function(){
		$('.item-news').hide();
		$('.tweet').delay(500).fadeIn(500);
		$('.inst').delay(500).fadeIn(500);
		$('.tweet-news').delay(500).fadeIn(500);
	});

	$('.inst').click(function(){
		$('.inst-news').css('display','block');
		$('.tweet-news').css('display','none');
		$('.aqa').height($('.aqa>img').width());
	});
	
	$('.tweet').click(function(){
		$('.tweet-news').css('display','block');
		$('.inst-news').css('display','none');
	});

	//Socials

	$('.fa-facebook').click(function(){
		window.location.href ="https://www.facebook.com/Yuppie-181687372365853/";
	});
	$('.fa-vk').click(function(){
		window.location.href ="https://vk.com/public149131856";
	});
	$('.fa-instagram').click(function(){
		window.location.href ="https://www.instagram.com/yuppiecity/";
	});
	$('.fa-twitter').click(function(){
		window.location.href ="https://twitter.com/Yuppie30740014";
	});
		
});


window.onload = function() {
 // INSTAFEED SQUARE SIZE
 	$('.aqa').height($('.aqa>img').width());
}