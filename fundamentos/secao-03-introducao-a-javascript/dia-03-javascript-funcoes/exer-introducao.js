let saldo = 100;

function somaSaldo(valor) {
    return valor + saldo;
 };

function subtraiSaldo(valor) {
    return saldo - valor;
 };

function multiplicaSaldo(valor) {
    return valor * saldo;
 };

function dividiSaldo(valor) {
    return saldo / valor;
 };

console.log(somaSaldo(300));
console.log(subtraiSaldo(50));
console.log(multiplicaSaldo(2));
console.log(dividiSaldo(5));
