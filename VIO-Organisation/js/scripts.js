var aboutBlock = function(){
	$('.about-block').click(function(){
		if ($(window).width()>991) {
			if($(this).hasClass('open-about')) {
				$(this).css('height','100px');
				$(this).children('.opacity-about').children('.about-image-title').delay(500).fadeIn(1000);
				$(this).children('.opacity-about').children('.about-image-text').hide();
				$(this).removeClass('open-about');
			}
			else{
				$(this).css('height',$(this).children('.opacity-about').children('img').height());
				$(this).css('background-position','center center');
				$(this).css('transition','1s');
				$(this).addClass('open-about');
				$(this).children('.opacity-about').css('transition','1s');
				$(this).children('.opacity-about').children('.about-image-title').css('display','none');
				$(this).children('.opacity-about').children('.about-image-text').delay(1000).slideDown(1000);
			}
		}
	})

	$('.about-image-title').mouseover(function(){
		if ($(window).width()>991) {
			$(this).parent('.opacity-about').css('padding-right','20px');
			$(this).parent('.opacity-about').css('transition','1s');
		}
	})
	$('.about-image-title').mouseleave(function(){
		if ($(window).width()>991) {
			$(this).parent('.opacity-about').css('padding-right','0px');
			$(this).parent('.opacity-about').css('transition','1s');
		}
	})

	if ($(window).width()<992) {
		$('.about-block').height('100px');
		$('.about-block').css('background-position','center 10%');
		$('.opacity-about').css('background','rgba(0,0,0,.6);');
		$('.about-image-title').css('display','block');
		$('.about-image-text').addClass('hidden-lg').addClass('hidden-md');
		$('.about-image-text').slideUp();
	}
}

var aboutSteps = function(){
	$('.step-hover').css('height',$('.step-hover').parent('.step-text').parent('.step').children('.step-number').children('img').height());
	var stepsHoverTop=40;
	for(var i=2; i<6;i++) {
		stepsHoverTop = stepsHoverTop + $('.steps-block .step:nth-child('+(i-1)+')').height()+20;
		$('.steps-block .step:nth-child('+i+') .step-text .step-hover').css('top', stepsHoverTop);
	}
}

var socialBlock = function() {
	if ($(window).width()<768) {
		$('.icons-block .fa').removeClass('fa-3x').addClass('fa-2x');
	}else {
		$('.icons-block .fa').removeClass('fa-2x').addClass('fa-3x');
	}	
}

var checkFocus=function(){
	sloganAnimate();
}

var sloganAnimate=function() {
	var sloganSec=0;
 	for (var i=1;i<4; i++) {
 		$('.slogan div:nth-child('+i+')').delay(sloganSec).animate({opacity:1},800);
 		sloganSec+=800;
	}	 
	$('.slogan').delay(4200).animate({opacity:0},800);
	$(this).delay(5200).queue(function (next) {
		$('.slogan div').css('opacity',0);
		$('.slogan').css('opacity',1);
		checkFocus();
		next();
	});
 }

var closeMenu=function() {
	$('.slide-menu').animate({right:'-300px'},500);
	$('#touch-menu').fadeIn(200);
	$('.header-lang').fadeIn(200);
	$('nav').fadeOut(200);
	$("html,body").css("overflow-y","auto");
	$('header').show();
	$("section footer").removeClass('blur');
	$('#navigation > div:nth-child(2)').delay(500).animate({'margin-left':'300px'},500)
	$('.navigation li').delay(500).animate({'margin-left':'300px'},500)
}

var workPopup=function() {
	$('.work_popup').fadeIn(500);
	$('.work_popup').css('opacity','0');
	$('.work_popup').css('display','flex');
	$('.career-message').css('display', 'none');
	$('#work_form').css('display','block');
}

$(document).ready(function(){
	
//SOCIALS
	$('.fa-facebook').click(function(){
		window.location.href ="https://www.facebook.com/VIOOrg/";
	});
	$('.fa-vk').click(function(){
		window.location.href ="https://vk.com/vioorganisation";
	});
	$('.fa-instagram').click(function(){
		window.location.href ="https://www.instagram.com/vioorganisation/";
	});
	$('.fa-twitter').click(function(){
		window.location.href ="https://twitter.com/vioorganisation";
	});

// MENU
	$('#touch-menu').mouseover(function(){
		$('.slide-menu').animate({right:'0px'},500);
		$('#touch-menu').fadeOut(200);
		$('.header-lang').fadeOut(200);
		$('nav').show();
		$("html,body").css("overflow-y","hidden");
		$('header').hide();
		$("section footer").addClass('blur');
		var delay=350;
		for (var i=1;i<$('.navigation li').length+1;i++){
			$('.navigation li:nth-child('+i+')').delay(delay).animate({'margin-left':0},400);
			delay+=150;
		}
		$('#navigation > div:nth-child(2)').delay(delay).animate({'margin-left':0},500)
	})

	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".slide-menu"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			closeMenu(); // скрываем его
		}
	});

// CAREER POPUP
	$('#career-link').click(function(){
		workPopup();
	});
	$('.footer-career span').click(function(){
		workPopup();
	});
	$('.start_with_us_btn').click(function(){
		workPopup();
	});

	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".popup"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			$('.work_popup').fadeOut(500); // скрываем его
		}
	});

// TEAM ANIMATION
	var polaroidAngle;
	var polaroidAngleSecond;

	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".team-polaroid > div.turnedOver"); // тут указываем ID элемента
		if (!div.is(e.target) //&& !div2.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			$('.team-polaroid > div.turnedOver').animate({'left':0,'top':0},100);
			$('.team-polaroid > div.turnedOver').css('box-shadow','none');
			$('.team-polaroid > div.turnedOver').delay(700).queue(function (next) {
				$('.team-polaroid > div.turnedOver').css({'-webkit-transform':'rotateY(0deg)','z-index':0});
				$('.team-polaroid > div.turnedOver').css('box-shadow','6px 6px 6px #000');
				$(this).css('transform',polaroidAngleSecond);
	    		next(); 
			});
			$('.team-polaroid > div.turnedOver').delay(200).queue(function (next) {
				$('.team-polaroid > div.turnedOver').children('.back-polaroid').css('display','none');
				$('.team-polaroid > div.turnedOver').removeClass('turnedOver');
	    		next(); 
			});
			$('.team-polaroid > div.turnedOver').children('.polaroid-unit').delay(950).fadeIn();
			$('.team-polaroid > div.turnedOver').children('.polaroid-name').delay(950).fadeIn();
		}
	});

	var z;
	$('.team-polaroid > div').bind('click',z = function() {
		$('.team-polaroid > div').unbind('click',z);
		if($(this).hasClass('turnedOver')){
			$(this).removeClass('turnedOver');
			$(this).animate({'left':0,'top':0},100);
			$(this).css('box-shadow','none');
			$(this).delay(700).queue(function (next) { 
				$(this).css({'-webkit-transform':'rotateY(0deg)','z-index':0});
				$(this).css('box-shadow','6px 6px 6px #000');
				$(this).css('transform',polaroidAngle);
	    		next(); 
	  		});
	  		$(this).delay(300).queue(function (next) {
	  			$(this).children('.back-polaroid').css('display','none');
	  			$('.team-polaroid > div').bind('click',z);
				next();
	  		});
	  		$(this).children('.polaroid-unit').delay(950).fadeIn();
	  		$(this).children('.polaroid-name').delay(950).fadeIn();
		}else {
			var w=$(this).width();
			var h=$(this).height();
			$(this).css('height',h);
			$(this).css('width',w);
			polaroidAngle=$(this).css('transform');
			var a=$(this).css('transform');
			var y=$(this).offset().top;
			var x=$(this).offset().left;
			var centerX=($(window).width()-w)/2-x;
			var centerY=($(window).height()-h)/2-y+$(window).scrollTop();
			$(this).animate({'left':centerX,'top':centerY, 'z-index':4},100);
			$(this).css('position','relative');
			$(this).delay(700).queue(function (next) { 
				$(this).css({'-webkit-transform':'rotateY(180deg)'});
				polaroidAngleSecond=a;
	    		next(); 
	  		});
			$(this).delay(300).queue(function (next) {
	  			$(this).children('.polaroid-unit').css('display','none');
				$(this).children('.polaroid-name').css('display','none');
				$(this).css('box-shadow','0 0 10px 2000px rgba(0, 0, 0, .8)');
				$('.team-polaroid > div').bind('click',z);
				$(this).addClass('turnedOver');
				next();
	  		});
			$(this).children('.back-polaroid').delay(950).fadeIn();
			$(this).css('transform','rotate(0deg)');
			$('html,body').css('overflow-y','hidden');
		}
	});

// ANOUT 4 BLOCKS 
	aboutBlock();

// ABOUT STEPS
	$('.step').mouseover(function(){
		$(this).children('.step-text').children('.step-hover').css('width','0%');
		$(this).children('.step-text').children('.step-hover').css('transition','0.5s');
	});

	$('.step').mouseleave(function(){
		$(this).children('.step-text').children('.step-hover').css('width','71.5%');
		$(this).children('.step-text').children('.step-hover').css('transition','0.5s');
	});

// SOCIAL BLOCK
	socialBlock();

// CAREER FORM
	$('#work_form').submit(function() {
	 	var form = document.forms.work_form;
			var formData = new FormData(form);  

			var xhr = new XMLHttpRequest();
			xhr.open("POST", "career-form.php");

			xhr.onreadystatechange = function() {
				if (xhr.readyState == 4) {
					if(xhr.status == 200) {
						data = JSON.parse(xhr.responseText);
						$("#err_name").html(data["n"]);
	        			$("#err_email").html(data["e"]);
	        			$("#err_phone").html(data["p"]);
	        			if(data["f"]!="nbsp;"){
	        				$("#work_form input[type=file]").css('color','red');
	        			}else {
	        				$("#work_form input[type=file]").css('color','#1e3d33');
	        			}
	        			if(data["m"]=="Ваше резюме отправлено!" || data["m"]=="Your message was successfully sent!"){
	        				$("#work_form").css('display','none');
	        				$(".career-message").css('display','flex');
	        				$(".career-message").html(data["m"]);

	        			}else {
	        				$(".career-message").css('display','none');
	        				$("#work_form").css('display','block');
	        				$(".career-message").html(data["m"]);
	        			}
					}
				}
			};
			
			xhr.send(formData);

		// $.ajax({
		// 	method: "POST",
		// 	dataType: "JSON",
		// 	url: "career-form.php",
		// 	data: $(this).serialize(),
		// 	success: function(data){
  //     		$("#err_name").html(data.n);
  //       		$("#err_email").html(data.e);
  //       		$("#err_phone").html(data.p);
  //       		$('form h3').html(data.f);
		// 	}
			
		//  });//
		return false;
	});
});

window.onload = function() {
 	aboutSteps();
 	checkFocus();

 // INSTAFEED SQUARE SIZE
 	$('.aqa').height($('.aqa>img').width());
}

$(window).resize(function () {
	aboutBlock();
	aboutSteps(); 
	socialBlock();

})

$(window).scroll(function() {
	if($(window).scrollTop()>($('#mainSlide').height()-90)) {
		$('#menu-bg').addClass('green');
	}else {
		$('#menu-bg').removeClass('green');
	}
});