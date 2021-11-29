setTimeout(() => {
let duration = 0;
duration = Number(document.getElementById('player').duration);
duration = Math.trunc(duration);
let minute = Math.trunc(duration / 60);
let sec = duration - minute * 60;
let duration_string = minute + ":" + sec;
document.getElementById('duration').innerHTML = "0:00 <strong> / </strong> " + duration_string;
}, 100);
function skip(){
	let duration = Number(document.getElementById('player').duration);
	duration = Math.trunc(duration);
	var prg = duration / 100;
	var slider = document.getElementById('rng_audio');
	let current_time = slider.value*prg;
	document.getElementById('player').currentTime = current_time;
}
function audio_start() {
	let duration = document.getElementById('player').duration;
	duration = Math.trunc(duration);
	let minute = Math.trunc(duration / 60);
	let sec = duration - minute * 60;
	let duration_string = minute + ":" + sec;
	document.getElementById('player').play()
	var current_time = 0;
	let minunte_current = 0;
	var slider = document.getElementById('rng_audio');
	var sl_val = 0;
	var prg = duration / 100;
	let cheker_minute = 0;
	let timer = setInterval(() =>
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
				clearInterval(timer);
			}
		}
	, 10);
}
