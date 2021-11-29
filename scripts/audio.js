
function skip(){
	current_time = slider.value*prg;
	document.getElementById('player').currentTime = current_time;
}
function swap_music(test){
	document.getElementById('player').src = $(test).next().attr('src');
	document.getElementById('title').innerHTML = $(test).next().text();
	setTimeout(() => {
		duration = Number(document.getElementById('player').duration);
		duration = Math.trunc(duration);
		minute = Math.trunc(duration / 60);
		sec = duration - minute * 60;
		duration_string = minute + ":" + sec;
		slider.value = 0;
		document.getElementById('duration').innerHTML = "0:00 <strong> / </strong> " + duration_string;
	}, 300);

}
function audio_start() {
	document.getElementById('player').play();
	current_time = 0;
	minunte_current = 0;
	slider = document.getElementById('rng_audio');
	slider.style.cssText = "";
	sl_val = 0;
	prg = duration / 100;
	cheker_minute = 0;	
	timer = setInterval(() =>
		{
			current_time = Math.trunc(document.getElementById('player').currentTime);
			var sec_current = current_time - minunte_current * 60;
			while(sec_current < 0)
			{
				minunte_current --;
				sec_current = current_time - minunte_current * 60;
			}
			if (current_time / prg > sl_val){
				sl_val = current_time / prg;
				slider.value = sl_val;
			}
			if (sec_current>59)
			{
				minunte_current ++;
			}

			cheker_minute = minunte_current;
			if (sec_current<10)
			{
				document.getElementById('duration').innerHTML = minunte_current +":0"+ Number(sec_current) + " <strong> / </strong> " + duration_string;
			}
			else document.getElementById('duration').innerHTML = minunte_current +":"+ Number(sec_current) + "<strong> / </strong>" + duration_string;
			if (current_time == duration){
				slider.value = 0;
				document.getElementById('duration').innerHTML = "0:00 <strong> / </strong> " + duration_string;
				clearInterval(timer);
			}
		}
	, 10);
}
function mute(){
	if (key_for_mute == 0)
	{
		volume = document.getElementById('player').volume 
		document.getElementById('player').volume =0;
		key_for_mute = 1;
	}
	else if(key_for_mute == 1)
	{
		document.getElementById('player').volume = volume
		key_for_mute = 0;
	}
}
key_for_mute = 0;
setTimeout(() => {
duration = Number(document.getElementById('player').duration);
duration = Math.trunc(duration);
minute = Math.trunc(duration / 60);
sec = duration - minute * 60;
duration_string = minute + ":" + sec;
prg = duration / 100;
slider = document.getElementById('rng_audio');
document.getElementById('duration').innerHTML = "0:00 <strong> / </strong> " + duration_string;
}, 300);
