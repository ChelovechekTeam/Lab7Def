setTimeout(() => {
let duration = 0;
duration = Number(document.getElementById('player').duration);
duration = Math.trunc(duration);
let minute = Math.trunc(duration / 60);
let sec = duration - minute * 60;
let duration_string = minute + ":" + sec;
document.getElementById('duration').innerHTML = "0:00 <strong> / </strong> " + duration_string;
}, 100);
function audio_start() {
	let duration = document.getElementById('player').duration;
	duration = Math.trunc(duration);
	let minute = Math.trunc(duration / 60);
	let sec = duration - minute * 60;
	let duration_string = minute + ":" + sec;
	document.getElementById('player').play()
	var current_time = 0;
	let minunte_current = 0;
	let timer = setInterval(() =>
		{
			current_time = Math.trunc(document.getElementById('player').currentTime);
			var sec_current = current_time - minunte_current * 60;
			if (sec_current>59)
			{
				minunte_current ++;
			}
			if (sec_current<10)
			{
				document.getElementById('duration').innerHTML = minunte_current +":0"+ Number(sec_current) + " <strong> / </strong> " + duration_string;
			}
			else document.getElementById('duration').innerHTML = minunte_current +":"+ Number(sec_current) + "<strong> / </strong>" + duration_string;
		}
	, 10);
	
}
