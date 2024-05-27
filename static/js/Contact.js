// Seleccionar el formulario
const form = document.getElementById('contact-form');

// Agregar un evento de escucha para la presentación del formulario
form.addEventListener('submit', function(event) {
    // Evitar que el formulario se envíe automáticamente
    event.preventDefault();
    
    // Validar los campos del formulario
    if (validateForm()) {
        // Si el formulario es válido, enviar los datos
        this.submit();
    }
});

// Función para validar el formulario
function validateForm() {
    // Obtener los valores de los campos del formulario
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Validar que los campos no estén vacíos
    if (name === '' || email === '' || message === '') {
        alert('Por favor, complete todos los campos del formulario.');
        return false;
    }
    
    // Validar el formato del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, ingrese un correo electrónico válido.');
        return false;
    }
    
    // Si todas las validaciones pasan, el formulario es válido
    return true;
}
form.addEventListener("submit", validarFormulario());