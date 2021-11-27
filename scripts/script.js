 //$(document).ready(setTimeout(() => {alert("Вы можете выбрать блок для установки прозрачности, ислючением является header ")}, 1000));
var rng = document.getElementById("rng_light");
var str = "background: rgba(0,0,0,";
var light_text = document.getElementById("text_add_inform");
var cheker = 0;
function swap_to_light_container() {
	if (cheker == 0){
		str = "background: rgba(255,255,255,";
		cheker = 1;
		rng.value = "50";
		light_text = document.getElementById("container");
	}
}
function swap_to_light_text_add_inform() {
	if (cheker == 0){
		str = "background: rgba(0,0,0,";
		cheker = 1;
		rng.value = "50";
		light_text = document.getElementById("text_add_inform");
	}
}
function test() {
	cheker = 0;
	let key = Number(rng.value) * 0.01;
	let output = str + key;
	light_text.style.cssText = output;
}