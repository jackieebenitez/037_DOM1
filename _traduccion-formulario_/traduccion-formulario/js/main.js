function cambiarIdioma(idioma){
	var signin = document.getElementById ("form-signin-heading"); // a partir de aqui declaramos las variables por cada elemento que queremos cambiar
	var mail = document.getElementById("inputEmail"); // ¡ojo! esto es un placeholder y los placeholders tienen una sintaxis distinta
	var password = document.getElementById("inputPassword"); // ¡ojo! esto es un placeholder y los placeholders tienen una sintaxis distinta
	var checkbox = document.getElementById("checkbox");
	var inicio = document.getElementById("iniciar");
	if(idioma === "es"){
		signin.innerHTML="Iniciar sesión";
		document.getElementById("inputEmail").setAttribute("placeholder","Ingresa tu correo electrónico");
		document.getElementById("inputPassword").setAttribute("placeholder","Contraseña");
		checkbox.innerHTML ="Recuérdame";
		inicio.innerHTML ="Ingresar";
	} else if (idioma === "en") {
		signin.innerHTML="Log in";
		document.getElementById("inputEmail").setAttribute("placeholder","Mail");
		document.getElementById("inputPassword").setAttribute("placeholder","Password");
		checkbox.innerHTML ="Remember me";
		inicio.innerHTML ="Go!";
	}
}
cambiarIdioma("es");
var btnEs = document.getElementById("btnEs")
btnEs.onclick = function(){
	cambiarIdioma("es");
}
var btnEn = document.getElementById("btnEn")
btnEn.onclick = function(){
	cambiarIdioma("en");
}

//var idioma = "es"; // aqui se pone español (ES) o ingles (EN)


