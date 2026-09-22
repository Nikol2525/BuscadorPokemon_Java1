
const formulario = document.querySelector("form");
const botonesEntrenadores = document.querySelectorAll(
    'body > div:last-child button'
);

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;

    let mensaje = document.querySelector(".mensaje");

    if (!mensaje) {
        mensaje = document.createElement("div");
        mensaje.classList.add("mensaje", "exito");
        formulario.appendChild(mensaje);
    }

    mensaje.textContent = `Entrenador ${nombre} ${apellido} registrado correctamente.`;

    formulario.reset();
});

botonesEntrenadores.forEach(function(boton) {
    boton.addEventListener("click", function() {

        botonesEntrenadores.forEach(function(btn) {
            btn.style.transform = "";
        });

        boton.style.transform = "scale(1.08)";

        const nombreEntrenador = boton.textContent;

        alert(`Entrenador seleccionado: ${nombreEntrenador}`);
    });
});

