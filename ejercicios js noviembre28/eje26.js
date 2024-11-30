function validarCorreo() {
    let correo = document.getElementById("email").value;
    let mensajeError = document.getElementById("mensajeError");
    if (correo.includes("@") && correo.includes(".")) {
        mensajeError.style.display = "none";
        return true;
    } else {
        mensajeError.style.display = "block";
        return false;
    }
}
