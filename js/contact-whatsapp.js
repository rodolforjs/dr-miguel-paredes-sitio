// El formulario de contacto no tiene backend (sitio estático en GitHub
// Pages) — en vez de mandar a un endpoint inexistente, arma un mensaje
// de WhatsApp ya redactado con los datos ingresados y abre WhatsApp con
// ese mensaje listo para enviar.
(function () {
    function init() {
        var form = document.getElementById("contact_form");
        if (!form) return;

        form.addEventListener("submit", function (e) {
            e.preventDefault();

            var name = document.getElementById("name").value.trim();
            var email = document.getElementById("email").value.trim();
            var phone = document.getElementById("phone").value.trim();
            var message = document.getElementById("message").value.trim();

            var text =
                "Nueva consulta desde el sitio web\n\n" +
                "Nombre: " + name + "\n" +
                "Email: " + email + "\n" +
                "Teléfono: " + phone + "\n\n" +
                "Mensaje:\n" + message;

            var url = "https://wa.me/56967765335?text=" + encodeURIComponent(text);
            window.open(url, "_blank", "noopener");
        });
    }

    document.addEventListener("DOMContentLoaded", init);
})();
