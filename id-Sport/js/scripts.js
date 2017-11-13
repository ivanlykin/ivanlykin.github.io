window.onload = function() {
	
	$('#index-content').css('width',($('.index-categories').width()+20)*4);
	$('#index-page').css('margin-top',($(window).height()-86-$('#index-page').height())/2);

	$('.arrow-block').css('top',($(window).height()-30));

	$('.index-mobile-block').css('height',$(window).height());
	$('#mobile-logo').css('padding-top',($(window).height()-$('#mobile-logo').height())/2);
	$('.index-titles').css('padding-top',($(window).height()-$('.index-titles').height())/2);

	$('#index-mob-menu').height($(window).height()-$('#menu-arrow').height());
	$('#index-mob-menu ul li').height(($('#index-mob-menu').height()-$('#index-social-mobile').height()-60)/7);
	$('#index-mob-menu ul li').css('padding-top',($('#index-mob-menu ul li').height()-$('#index-mob-menu ul li a').height()-4)/2);

	if($(window).height()>$(window).width()) {
		$('#mobile-block2').css('background', 'url(img/index-mobile/casual_mob_v.jpg) no-repeat');
		$('#mobile-block3').css('background', 'url(img/index-mobile/football_mob_v.jpg) no-repeat');
		$('#mobile-block4').css('background', 'url(img/index-mobile/triathlon_mob_v.jpg) no-repeat');
		$('#mobile-block5').css('background', 'url(img/index-mobile/crossfit_mob_v.jpg) no-repeat');
		$('#mobile-block6').css('background', 'url(img/index-mobile/other_mob_v.jpg) no-repeat');
		$('.index-mobile-block').css('background-size', 'cover');
	}else {
		$('#mobile-block2').css('background', 'url(img/index-mobile/casual_mob_g.jpg) no-repeat');
		$('#mobile-block3').css('background', 'url(img/index-mobile/football_mob_g.jpg) no-repeat');
		$('#mobile-block4').css('background', 'url(img/index-mobile/triathlon_mob_g.jpg) no-repeat');
		$('#mobile-block5').css('background', 'url(img/index-mobile/crossfit_mob_g.jpg) no-repeat');
		$('#mobile-block6').css('background', 'url(img/index-mobile/other_mob_g.jpg) no-repeat');
		$('.index-mobile-block').css('background-size', 'cover');
	}
	$('.index-mobile-block').css('background-position', 'center');


	$('.right-price-desc').css('height', $('.left-price-desc').height());

	$('.price-desc-full').click(function () {
		$('html, body').animate({ scrollTop: $('#full-price').offset().top -90}, 500);
	});
};

$(document).ready(function() {

	function arrow_animate(){
		$('.arrow-block').animate({"margin-top": "-=15"}, 700);
		$('.arrow-block').animate({"margin-top": "+=15"}, 700);
	}

	setInterval(arrow_animate, 100);
	

	$('.menu-icon').click(function() {
		$('#index-mob-menu').height($(window).height()-40);
		$('#index-mob-menu ul li').height(($('#index-mob-menu').height()-$('#index-social-mobile').height()-60)/18);
		$('#index-mob-menu ul li').css('padding-top',0);
		$('#index-mob-menu ul li').css('margin-top',($('#index-mob-menu ul li').height()-$('#index-mob-menu ul li a').height()-4)/3);
		$('#index-mob-menu ul li').height($('#index-mob-menu ul li').height()-($('#index-mob-menu ul li').height()-$('#index-mob-menu ul li a').height()-4)/3);
		$('.index-mobile-menu').fadeIn(300);
		$('#index-mob-menu').height($(window).height()-$('#menu-arrow').height());
		$('#index-mob-menu ul li').height(($('#index-mob-menu').height()-$('#index-social-mobile').height()-60)/7);
		$('#index-mob-menu ul li').css('padding-top',0);
		$('#index-mob-menu ul li').css('margin-top',($('#index-mob-menu ul li').height()-$('#index-mob-menu ul li a').height()-4)/2);
		$('#index-mob-menu ul li').height($('#index-mob-menu ul li').height()-($('#index-mob-menu ul li').height()-$('#index-mob-menu ul li a').height()-4)/2);
	});

	$('#menu-arrow').click(function() {
		$('.index-mobile-menu').fadeOut(300);
	});
	$('.menu-arrow1').click(function() {
		$('.index-mobile-menu').fadeIn(300);
	});

	$('.up-arrow').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false
    });


    $('.next-price').click(function() {
		$('#shoes-price-2').delay(300).fadeIn(300);
		$('#shoes-price-1').fadeOut(300);
	});

	$('.previous-price').click(function() {
		$('#shoes-price-1').delay(300).fadeIn(300);
		$('#shoes-price-2').fadeOut(300);
	});


	$('.sales').click(function() {
		$('.active-sales').removeClass('active-sales');
		$(this).addClass('active-sales');
	});

    $('#all-sales').click(function() {
    	$('.sale-row').css('display','none');
    	$('.all-sales').fadeIn(300);
    });
    $('#football-sales').click(function() {
    	$('.sale-row').css('display','none');
    	$('.football-sales').fadeIn(300);
    });
    $('#triathlon-sales').click(function() {
    	$('.sale-row').css('display','none');
    	$('.triathlon-sales').fadeIn(300);
    });
    $('#crossfit-sales').click(function() {
    	$('.sale-row').css('display','none');
    	$('.crossfit-sales').fadeIn(300);
    });
    $('#oter-sales').click(function() {
    	$('.sale-row').css('display','none');
    	$('.other-sales').fadeIn(300);
    });
    $('#casual-sales').click(function() {
    	$('.sale-row').css('display','none');
    	$('.casual-sales').fadeIn(300);
    });

});

$(window).resize(function () {
	$('#index-content').css('width',($('.index-categories').width()+20)*4);
	$('#index-page').css('margin-top',($(window).height()-86-$('#index-page').height())/2);

	$('.arrow-block').css('top',($(window).height()-30));

	$('.index-mobile-block').css('height',$(window).height());
	$('#mobile-logo').css('padding-top',($(window).height()-$('#mobile-logo').height())/2);
	$('.index-titles').css('padding-top',($(window).height()-$('.index-titles').height())/2);
	
	$('#index-mob-menu').height($(window).height()-$('#menu-arrow').height());
	$('#index-mob-menu ul li').height(($('#index-mob-menu').height()-$('#index-social-mobile').height()-60)/7);
	$('#index-mob-menu ul li').css('padding-top',0);
	$('#index-mob-menu ul li').css('margin-top',($('#index-mob-menu ul li').height()-$('#index-mob-menu ul li a').height()-4)/2);
	$('#index-mob-menu ul li').height($('#index-mob-menu ul li').height()-($('#index-mob-menu ul li').height()-$('#index-mob-menu ul li a').height()-4)/2);


	if($(window).height()>$(window).width()) {
		$('#mobile-block2').css('background', 'url(img/index-mobile/casual_mob_v.jpg) no-repeat');
		$('#mobile-block3').css('background', 'url(img/index-mobile/football_mob_v.jpg) no-repeat');
		$('#mobile-block4').css('background', 'url(img/index-mobile/triathlon_mob_v.jpg) no-repeat');
		$('#mobile-block5').css('background', 'url(img/index-mobile/crossfit_mob_v.jpg) no-repeat');
		$('#mobile-block6').css('background', 'url(img/index-mobile/other_mob_v.jpg) no-repeat');
		$('.index-mobile-block').css('background-size', 'cover');
	}else {
		$('#mobile-block2').css('background', 'url(img/index-mobile/casual_mob_g.jpg) no-repeat');
		$('#mobile-block3').css('background', 'url(img/index-mobile/football_mob_g.jpg) no-repeat');
		$('#mobile-block4').css('background', 'url(img/index-mobile/triathlon_mob_g.jpg) no-repeat');
		$('#mobile-block5').css('background', 'url(img/index-mobile/crossfit_mob_g.jpg) no-repeat');
		$('#mobile-block6').css('background', 'url(img/index-mobile/other_mob_g.jpg) no-repeat');
		$('.index-mobile-block').css('background-size', 'cover');
	}
	$('.index-mobile-block').css('background-position', 'center');
});
