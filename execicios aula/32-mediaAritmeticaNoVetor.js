/*
32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.
 */

const number =[1,2,4,20,30,50,67,100,90,10,2]

const soma = (acumulador,elementoAtual) =>{
    return acumulador + elementoAtual
}

const acumulador = number
console.log((acumulador.reduce(soma)/number.length).toFixed(2)) 
console.log(acumulador.reduce(soma))