// ÂNGULOS INTERNOS DE UM TRIÂNGULO

let anguloA = 55;
let anguloB = 100;
let anguloC = 25;

let somaDosAngulos = anguloA + anguloB + anguloC;

let angulosPosiveis = anguloA > 0 && anguloB > 0 && anguloC > 0;

if (angulosPosiveis) {
    if (somaDosAngulos === 180) {
        console.log(true);
    } else {
        console.log(false);
    };
} else {
    console.log('Erro: ângulo inválido!')
}