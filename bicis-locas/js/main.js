//recuerda que en el HTML usaste /required que es una palabra
//reservada que se puede usar para el html y que te dice que los
//espacios son obligatorios. 
function validateForm(){
	// a continuacióne están las expresiones regulares, son como
	//operaciones que se mandan llamar en los if
	var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
	var regexNombre = /^[A-Z][a-z]*$/;
	// hago las variables y las mando llamar del html
	var name = document.getElementById("name").value
	var lastname = document.getElementById ("lastname").value;
	var mail = document.getElementById ("input-email").value; 
	var password = document.getElementById("input-password").value;
	//inician mis condiciones
	//si regexNombre es diferente a lo que hace la expresión regular
	//entonces manda un alert que diga ... y así con cada uno. 
	if (!regexNombre.test(name)){
		alert("La primer letra de tu nombre debe ser mayúscula");
	}
	if (!regexNombre.test(lastname)){
		alert("La primer letra de tu apellido debe ser mayúscula");
		//errores = false;
	}
	if(!regexEmail.test(mail)){
		alert("Tu e-mail es incorrecto");
	}
	if(password.length < 6){
		alert("Tu password debe contener al menos 6 caracteres");
	}
	
}

	



/*if (nombre === " " || nombre === null){
		alert("Digite el usuario");
		return false;
	}  
	if (!/^^[a-z][A-Z]*$/g.test(document.getElementbById("name").value)){
		alert("Caracteres inválidos");
		return false:
	}

}*/
