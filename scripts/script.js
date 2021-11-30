 //$(document).ready(setTimeout(() => {alert("Вы можете выбрать блок для установки прозрачности, ислючением является header ")}, 1000));
var rng = document.getElementById("rng_light");
var str = "background: rgba(0,0,0,";
var light_text = document.getElementById("text_add_inform");
var cheker = 0;
function test() {
	cheker = 0;
	let key = Number(rng.value) * 0.01;
	let output = str + key;
	light_text.style.cssText = output;
	document.getElementById("audio_block").style.cssText = output;
	document.getElementById("block_for_title_audio").style.cssText = output;
}