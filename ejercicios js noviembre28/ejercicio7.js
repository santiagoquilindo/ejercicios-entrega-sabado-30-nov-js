function seraPalindromo(palabra) {
    let palabraInvertida = "";
    for (let i = palabra.length - 1; i >= 0; i--) {
        palabraInvertida += palabra[i];
    }
    if (palabra === palabraInvertida) {
        return "Es palindromo";
    } else {
        return "No es palindromo";
    }
}
let palabra1 = "amar";
let resultado1 = seraPalindromo(palabra1);
console.log(resultado1);
let palabra2 = "madam";
let resultado2 = seraPalindromo(palabra2);
console.log(resultado2);
