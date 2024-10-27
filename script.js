document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío normal del formulario

    emailjs.sendForm('service_aylh547', 'template_6rothwr', this)
        .then(function() {
            document.getElementById("result-message").innerText = "¡Mensaje enviado con éxito!";
            document.getElementById('contact-form').reset();
            document.getElementById("result-message").style.display = "block";
        }, function(error) {

            console.log(error)
            document.getElementById("result-message").innerText = "Error al enviar el mensaje, inténtalo de nuevo.";
            document.getElementById("result-message").style.display = "block";
        });
});