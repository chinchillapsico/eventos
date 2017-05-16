var cambiaTexto = function (){
	this.childNodes[1].childNodes[1].innerHTML = "Hola Mundo";
};

function principal(){
	var ultimo = document.querySelector("#menu-principal ul li:last-child");
	ultimo.addEventListener('mouseover', function(){ // digo a menu. agrego un evento ('tipo de evento', funcion).
		alert("Hola!");
	});

	var menu = document.getElementById('menu-principal');
	menu.addEventListener('click', cambiaTexto)

	var div = document.getElementsByTagName('div')[0];

	var miInput = document.getElementById('mi-input')

	miInput.addEventListener('focus', function(){
		console.log('Entro al input');
	});

	miInput.addEventListener('blur', function(){
		console.log('Salgo del input');
	});

	miInput.addEventListener('change', function(){
	console.log('Cambiando!');
	});

}
principal();