function showAlert() {
    alert('¡Hola, esta es una alerta desde JavaScript!');
}

document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
           document.querySelector(".nav-links").
                      classList.toggle("nav-links-responsive")})

                      //addEventListener -> Sirve para crear una barra de Navegacion, es la encargada!

const miBoton = document.getElementById('miBoton');

function handleClick() {
    alert('!Hola¡ Has hecho clic en el Boton bla bla blaaaa');
}
miBoton.addEventListener("click", handleClick);
//-----------------------------------------------------------

const form = document.getElementById('miForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
})

function validateEmail(email) {
    const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
  }
  function validateForm() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    if (!validateEmail(email)) {
      alert('Por favor ingrese un correo electrónico válido.');
    } else {
      alert('Correo electrónico enviado correctamente.');
    }
  }