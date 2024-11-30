let datos = [
    { nombre: "Juan", edad: 25 },
    { nombre: "Ana", edad: 30 },
    { nombre: "Luis", edad: 22 }
];

let tabla = document.getElementById("tabla");

let encabezado = tabla.insertRow();
Object.keys(datos[0]).forEach(propiedad => {
    let celda = encabezado.insertCell();
    celda.textContent = propiedad;
});
datos.forEach(objeto => {
    let fila = tabla.insertRow();
    Object.values(objeto).forEach(valor => {
        let celda = fila.insertCell();
        celda.textContent = valor;
    });
});
