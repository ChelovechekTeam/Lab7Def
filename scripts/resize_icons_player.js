$(window).resize(test_text_adapt);
function test_text_adapt() {
	let height_text = $('.titles_audio').children('div').children('p').height();
	$('.titles_audio').children('img').width(height_text);
	$('.titles_audio').children('img').height(height_text);
}
test_text_adapt();