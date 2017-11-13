$(document).ready(function(){

	 $(".navigation").on("click",".scroll", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top-50;
        $('body,html').animate({scrollTop: top}, 1500);
    });

	var angle=0;
	$('#touch-menu').click(function(){
		if(angle==180){
			jQuery('#touch-menu-arrow').rotate({animateTo:0});
			angle=0
		}else{
			jQuery('#touch-menu-arrow').rotate({animateTo:180});
			angle=180
		}
		$('.navigation').slideToggle(500);		
	})


	if($(window).width()<768) {
		$('#slide1').attr('src','img/slide1_1.jpg');
		$('#slide2').attr('src','img/slide2_1.jpg');
		$('#slide3').attr('src','img/slide3_1.jpg');
	}
	else {
		$('#slide1').attr('src','img/slide1.jpg');
		$('#slide2').attr('src','img/slide2.jpg');
		$('#slide3').attr('src','img/slide3.jpg');
	}
			
});

$(window).resize(function () {

	$('#mainSlideCenterBlock').css('top',($('.mainSlidePhoto').height()-$('#mainSlideCenterBlock').height()+50)/2);
	$('.quote_text').css('margin-top',-$('#quoteSlide').height()+(($('#quoteSlide').height()-$('.quote_text').height())/2));

	if($(window).width()>991) {
		$('#about-text1').css('height',$('#about-photo1').height());
		$('#about-text2').css('height',$('#about-photo2').height());
		$('#about-text3').css('height',$('#about-photo3').height());
		$('#about-text4').css('height',$('#about-photo4').height());
		$('#about-text5').css('height',$('#about-photo5').height());
		$('#empty-about1').css('height',$('#about-photo1').height());
		$('#empty-about2').css('height',$('#about-photo2').height());
		$('#empty-about3').css('height',$('#about-photo3').height());
		$('#empty-about4').css('height',$('#about-photo4').height());
		$('.small_photo').css('height',$('#big_photo').height()/2);
	}else{
		$('#about-text1').css('height','auto');
		$('#about-text2').css('height','auto');
		$('#about-text3').css('height','auto');
		$('#about-text4').css('height','auto');
		$('#empty-about3').css('height','auto');
		$('#empty-about4').css('height','auto');
	}

	if($(window).width()<768) {
		$('#slide1').attr('src','img/slide1_1.jpg');
		$('#slide2').attr('src','img/slide2_1.jpg');
		$('#slide3').attr('src','img/slide3_1.jpg');
	}
	else {
		$('#slide1').attr('src','img/slide1.jpg');
		$('#slide2').attr('src','img/slide2.jpg');
		$('#slide3').attr('src','img/slide3.jpg');
	}

})

window.onload = function() {

	$('#mainSlideCenterBlock').css('top',($('.mainSlidePhoto').height()-$('#mainSlideCenterBlock').height()+50)/2);
	$('.quote_text').css('margin-top',-$('#quoteSlide').height()+(($('#quoteSlide').height()-$('.quote_text').height())/2));


	if($(window).width()>991) {
		$('#about-text1').css('height',$('#about-photo1').height()-5);
		$('#about-text2').css('height',$('#about-photo2').height()-5);
		$('#about-text3').css('height',$('#about-photo3').height()-5);
		$('#about-text4').css('height',$('#about-photo4').height()-5);
		$('#about-text5').css('height',$('#about-photo5').height());
		$('#empty-about1').css('height',$('#about-photo1').height()-5);
		$('#empty-about2').css('height',$('#about-photo2').height()-5);
		$('#empty-about3').css('height',$('#about-photo3').height()-5);
		$('#empty-about4').css('height',$('#about-photo4').height()-5);
		$('.small_photo').css('height',$('#big_photo').height()/2);
	}

}