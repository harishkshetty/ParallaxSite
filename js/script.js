// load to first page after refreshing
$(window).on('beforeunload', function(){
  $(window).scrollTop(0);
});
$(document).ready(function(){
// page 2 image slides starts after refreshing
	 $('.image_wrap_content_page2').each(function (i) {
		setTimeout(function(){
			$('.image_wrap_content_page2').eq(i).css({'left':i*25+"%"});
			$('.image_wrap_content_page2').eq(i).css({'opacity':0.8});
		},1000*(i+1));
	})	
// Timing functions for page 1 animations	
	setTimeout(function(){
		$('#page_1').css({'right':0})},200);
	setTimeout(function(){
		$('header').css({'left':-200})},800);
	setTimeout(function(){
		$('header').css({'left':0})},3800);
	setTimeout(function(){
		$('#parallax').css({'color':'#fff'});
		$('#parallax').css({'transition':'all 0s ease-in-out'})},750);
//page 2 continous image sliding
	$('#image_wrap_page2').hover( slide_stops, slide_starts);
		//on hover	
	function slide_stops(){
		$('.image_wrap_content_page2').each(function (i) {
			$('.image_wrap_content_page2').eq(i).css({'left':i*25+"%"});
			$('.image_wrap_content_page2').eq(i).css({'opacity':0.8});
		})
	}
//on hover out
	function slide_starts(){
		setTimeout(function(){
			$('.image_wrap_content_page2').each(function (i) {
				setTimeout(function(){
					$('.image_wrap_content_page2').eq(i).css({'left':i*25+"%"});
					$('.image_wrap_content_page2').eq(i).css({'opacity':0.8});
				},400*(i+1));
			})
		},3000);

		setTimeout(function(){
			$('.image_wrap_content_page2').each(function (i) {
				setTimeout(function(){
					$('.image_wrap_content_page2').eq(i).css({'left':i*-25+"%"});
					$('.image_wrap_content_page2').eq(i).css({'opacity':0});
				},100*(i+1));
			})
		},1000);
	};	
// On click scroll to respective pages
	$('a').click(function() { 
		var getids=$(this).attr('class').substring(5);
		var numb=getids.substring(5);
		//even page
		if(numb%2==0){ 
	    	$('html,body').animate({
		   		scrollTop: $('#'+getids).offset().top-200},(numb/4)*1500);
		    $('html,body').animate({
		       	scrollTop: $('#'+getids).offset().top},1500);
		}
			//odd page
		else{
			$('html,body').animate({
		   		scrollTop: $('#'+getids).offset().top+200},(numb/4)*1500);
	    	$('html,body').animate({
		        scrollTop: $('#'+getids).offset().top},1500);
			}
		});
// click down button to last page
	$('#down_button').click(function(){
		$('html,body').animate({scrollTop: $('#page_8').offset().top+200},40000);
	});
// validation and clearing the textboxes on submission
	$('#page7_button').click(function(){
		var nm=$("#input_name").val();
		var em=$("#input_email").val();
		var is=$("#input_subject").val();
		if((nm=="")||(em=="")||(is==""))
		{
			alert("Please enter the details !");
		}
		else
		{
			var regemail= /^([a-z0-9_\.-]+\@[\da-z\.-]+\.[a-z\.]{2,6})$/gm;
			var regname=/^[a-z '-]+$/i;		
			if(em.match(regemail)&&(nm.match(regname))&&(is.match(regname))){
				alert("Your details has been registered. ThankYou !");
				$(".text_boxes").val("");
			}
			else{
				alert("Please enter valid details !");
			}
		}
	});
// All scroll functions
	$(window).scroll(scroll_effect);
	function scroll_effect(){
	var y_pos=0;
	y_pos=$(this).scrollTop();
	console.log(y_pos);
	if(y_pos>900)
		{$(".navigation_menu_float").css({"z-index":99});}
	if(y_pos<900)
		{$(".navigation_menu_float").css({"z-index":0});}
// page 1
// parallax motion		
	$("#parallax").css({
		'transform' : 'translate(0px, '+y_pos/2.2+'%)'
	});
	// This is for parallax show/hide  
	if(y_pos>600)
	{
		$('#parallax').css({'opacity':'0'});
	}
	if(y_pos<600)
	{
		$('#parallax').css({'opacity':'1'});
	}
	// page-1 web hide
	if(y_pos>270){
		$('#web').css({'opacity':0});
		$('#down_button').addClass('auto_bounce');
	}
	if(y_pos<270){
		$('#web').css({'opacity':1});
		$('#down_button').removeClass('auto_bounce');
	}
//page 2
	if((y_pos>$('#page_2').offset().top-$(window).height()/2))
	{
		$('#hline2').css({'width':60+'%'});
		$('#who').css({'opacity':0.8});
		$('#who').css({'width':100+"%"});
		$('#para2_1').css({'opacity':1});
		$('#para2_2').css({'opacity':1});
	}
//page 3
	if(y_pos>$('#page_3').offset().top-$(window).height()/2)
	{
		$('#hline3').css({'width':60+'%'});
		$('#hline3').css({'opacity':0.5});
		$('#our').css({'transform':'scale(1)'});
		$('#our').css({'opacity':0.5});
		$('#para3_1').css({'transform':'scale(1)'});
		$('#para3_1').css({'opacity':1});
	}
// page 3 images left images-load
	if((y_pos>$('#page_3').offset().top-100) && (y_pos<$('#page_3').offset().top+200)){
		$('.team_members').each(function (i) {
			setTimeout(function(){
				$('.team_members').eq(i).css({'left':0});
			},800*(i+1));
		})
	}
//page 4
	if(y_pos>$('#page_4').offset().top-$(window).height()/2)
	{
		$('#hline4').css({'width':60+'%'});
		$('#ourskills').css({'opacity':1});
		$('#ourskills').css({'width':100+"%"});
		$('#para4_1').css({'opacity':1});
		$('.donut').css({'transform':'rotate(1800deg)'});
		$('.donut').css({'opacity':1});
	}
// percentage animation
	 if((y_pos>$('#page_4').offset().top) && (y_pos<$('#page_4').offset().top+10)){
		$('.percentage').each(function () {
		    $(this).prop('Counter',0).animate({
		        Counter: $(this).text()
		    }, {
		        duration: 3000,
		        easing: 'swing',
		        step: function (now) {
		            $(this).text(Math.ceil(now)+"%");
		        }
		    });
		});
	}
// page 5
	if(y_pos>$('#page_5').offset().top-$(window).height()/2)
	{
		$('#why').css({'opacity':0.8});
		$('#why').css({'transform':'scale(1)'});
		$('#hline5').css({'width':60+'%'});
		$('#hline5').css({'opacity':0.8});
		$('#para5_1').css({'transform':'scale(1)'});
		$('#para5_1').css({'opacity':0.6});
	}
	if(y_pos>$('#page_5').offset().top+100)
	{
		$('.content_para5').each(function (i) {
			setTimeout(function(){
				$('.content_para5').eq(i).css({'transform':'translateY(0px)'});
				$('.content_para5').eq(i).css({'opacity':1});
			},200*(i+1));
		})
	}
// page 6
	if(y_pos>$('#page_6').offset().top-$(window).height()/3)
	{
		$('#hline6').css({'width':60+'%'});
		$('#ourwork').css({'opacity':0.7});
		$('#ourwork').css({'width':100+"%"});
		$('#para6_1').css({'opacity':0.8});
		$('#hline6').css({'opacity':0.8});
		$('.page6_button').css({'transform':'scale(1)'});
	}
	if(y_pos>$('#page_6').offset().top)
	{
		setTimeout(function(){
			$('.page6_image_upper img').each(function (i) {
				setTimeout(function(){
					$('.page6_image_upper img').eq(i).css({'left':i*33+"%"});
					$('.page6_image_upper img').eq(i).css({'top':0+"%"});
				},200*(i+1));
			});
			setTimeout(function(){
				$('.page6_image_lower img').each(function (i) {
					setTimeout(function(){
						$('.page6_image_lower img').eq(i).css({'left':i*33+"%"});
						$('.page6_image_lower img').eq(i).css({'top':0+"%"});
					},200*(i+1));
				});
			},900);
		},1000);
	}
//page 7
	if(y_pos>$('#page_7').offset().top-$(window).height()/2)
	{
		$('#hline7').css({'width':60+'%'});
		$('#contactus').css({'opacity':0.8});
		$('#contactus').css({'width':100+"%"});
		$('#para7_1').css({'opacity':1});
	}
// page 7 text boxes zoom out/in
	if((y_pos>$('#page_7').offset().top) && (y_pos<$('#page_7').offset().top+150)){
		$('.text_boxes').each(function (i) {
			setTimeout(function(){
				$('.text_boxes').eq(i).css({'transform':'scale(1.2)'});
			},400*(i+1));
		});
		setTimeout(function(){
			$('.text_boxes').each(function (i) {
				setTimeout(function(){
					$('.text_boxes').eq(i).css({'transform':'scale(1)'});
				},300*(i+1));
			}) 
		},1600);
	}			
//page 8
	if(y_pos>$('#page_8').offset().top-$(window).height()/2)
	{
		$('#findus').css({'opacity':0.8});
		$('#findus').css({'width':100+"%"});
		$('#hline8').css({'width':60+'%'});
		$('#hline8').css({'opacity':0.8});
		$('#para8_1').css({'opacity':0.8});
// map plugin 
		$('#map').locationpicker();
	}
} // scrolling function ends
})