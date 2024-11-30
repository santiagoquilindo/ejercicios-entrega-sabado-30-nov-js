let seguido = document.getElementById("seguido");

document.addEventListener("mousemove", function(evento) {
    let x = evento.pageX;
    let y = evento.pageY; 
    seguido.style.left = x + "px";
    seguido.style.top = y + "px";
});
