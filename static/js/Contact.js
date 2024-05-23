const formRegister = document.querySelector("#form-register");

const validarFormulario = (event) => {
    event.preventDefault();//me permite hacer una validacion personalizada

    const firstname = document.querySelector("#firstname");
    const lastname = document.querySelector("#lastname");
    const email = document.querySelector("#email");
    let validation = true;

    if(firstname.value.trim() ===""){ //elimino los espacios en blanco con trim
        // alert("El campo nombre no debe estar vacio") (una forma de dar aviso)
        document.querySelector("#error-firstname").textContent = "Debe completar el nombre"; //otra forma de dar el alerta
        validation = false;
    }
    if(lastname.value.trim() ===""){ 
        // alert("El campo nombre no debe estar vacio")
        document.querySelector("#error-lastname").textContent = "Debe completar el apellido"; 
        validation = false;
    }
    if(email.value.trim() ===""){ 
        // alert("El campo nombre no debe estar vacio")
        document.querySelector("#error-email").textContent = "Debe completar el campo de email"; 
        validation = false;
    }

    if(validation){
        formRegister.submit()
    } else{
        return false;
    }//si es true se envia el formulario
}

formRegister.addEventListener("submit", validarFormulario());