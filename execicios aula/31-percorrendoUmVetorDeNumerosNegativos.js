//  31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
// e imprime a quantidade no console.

const numeros = [1, 2, 6, -1, -8, 6, -7];

const numeroPositivo = (num) => num > 0
const numeroNegativo = (num) => num < 0

const resultado = numeros.filter(numeroNegativo).length;
const resultadoPositivo = numeros.filter(numeroPositivo).length;

console.log(resultado);
console.log(resultadoPositivo);
console.log(numeros.length)


