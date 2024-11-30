let entrada = document.getElementById("nuevaTarea");
let boton = document.getElementById("agregar");
let lista = document.getElementById("listaTareas");
boton.onclick = function() {
    let texto = entrada.value.trim();

    if (texto === "") {
        alert("Por favor, escribe una tarea."); 
        return;
    }
    let tarea = document.createElement("li"); 
    tarea.textContent = texto;
    tarea.onclick = function() {
        lista.removeChild(tarea);
    };

    lista.appendChild(tarea);
    entrada.value = "";
};
