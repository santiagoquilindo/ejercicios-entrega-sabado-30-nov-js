function obtenerDatosPersona() {
    let persona = {
        nombre: "david",
        edad: 20,
        ciudad: "popayan"
    };
    return `Nombre: ${persona.nombre}, Edad: ${persona.edad}, Ciudad: ${persona.ciudad}`;
}
let resultado = obtenerDatosPersona();
console.log(resultado);
