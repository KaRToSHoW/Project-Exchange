var progress_1 = document.getElementsByClassName("item__collected");
var progress_2 = document.getElementsByClassName("item__collect");
var progress_value = document.getElementsByClassName("item__progress-bar");
function value_1 (progress_1, i){
	let text = progress_1[i].textContent;
	let num = "";
	for(let j = 0; j < text.length; j++) {
		if(+text[j]  || +text[j] == 0) {
			num += text[j];
		}
		if(text[j] == "₽") {
			break;
		}
	}
	return parseInt(num);
}
function value_2(progress_2, i) {
	let text2 = progress_2[i].textContent;
	let num2 = "";
	for(let j = 0; j < text2.length; j++) {
		if(+text2[j] || +text2[j] == 0) {
			num2 += text2[j];
		}
		if(text2[j] == "₽") {
			break;
		}
	}
	return parseInt(num2);
}
for(let i = 0; i < progress_1.length; i++) {
	let summ = value_1(progress_1, i)/value_2(progress_2, i);
	progress_value[i].value = summ*100;
}