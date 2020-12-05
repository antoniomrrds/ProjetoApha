//30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.
//Usei o reduce para comparar posiçao a posição do vetor 
const vetor = [20, 30, 40, 50, 1, 60, 600000000, 90, 1, 100, 1000]

const maior = (acumulador, atual) => {
    return acumulador > atual ? acumulador : atual
}
const menor = (acumulador, atual) => {
    return acumulador < atual ? acumulador : atual
}
const acumulador = vetor
console.log(`O maior Número dentro do vetor é ${acumulador.reduce(maior)} O Menor Número dentro do vetor é ${acumulador.reduce(menor)}`)