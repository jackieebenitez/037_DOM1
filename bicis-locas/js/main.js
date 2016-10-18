function validateForm(){
	var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
	var regexNombre = /^[A-Z][a-z]*$/;
	var regexPassword = /^\d{9}$/;
	
	var name = document.getElementById("name").value // DONE
	var lastname = document.getElementById ("lastname").value; //DONE 
	var mail = document.getElementById ("input-email").value; //DONE
	var password = document.getElementById("input-password").value;
	var mensaje = " ";
	var errores = true; 

	if (!regexNombre.test(name)){
		alert("está mal nombre");
	}
	if (!regexNombre.test(lastname)){
		mensaje += "está mal apellido";
		errores = false;
	}
	if(!regexEmail.test(mail)){
		mensaje += "está mal email";
		errores = false;  
	}
	if(!regexPassword<6){
		mensaje = "está mal password son 6 letras";
		errores = false;
	}
	if(!errores){
		alert(mensaje);
	} 
	return errores;
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
