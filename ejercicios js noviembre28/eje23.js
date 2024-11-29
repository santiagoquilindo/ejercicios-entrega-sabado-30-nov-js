let boton = document.getElementById("agregar");
let lista = document.getElementById("mi-lista");
boton.addEventListener("click", function() {
    let nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = "Nueva tarea";
    lista.appendChild(nuevoElemento);
});
