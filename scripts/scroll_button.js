
$(window).scroll(()=>{
	if($(this).scrollTop()>100){
		$('.scroll').fadeIn();
	} else{
		$('.scroll').fadeOut();
	}
});

$('.scroll').click(()=>{
	$('html, body').animate({scrollTop: 0}, 600);
});