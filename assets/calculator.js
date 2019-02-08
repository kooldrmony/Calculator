function insert(num){
	document.form.view.value = document.form.view.value+num
}

function equal(){
	const exp = document.form.view.value;
	if(exp){
		document.form.view.value = eval(exp)
	}
}

function reset(){
	document.form.view.value = '';

}

function back(){
	const exp = document.form.view.value;
	document.form.view.value = exp.substring(0, exp.length-1);

}
