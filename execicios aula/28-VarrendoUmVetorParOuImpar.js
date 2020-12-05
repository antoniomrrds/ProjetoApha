// 28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

let vetor = [1, 2, 3, 5, 5, 6, 7, 8, 9, 4, 20, 30]

const par = (elemento) => {
    if (elemento % 2 == 0) {
        return elemento
    }
    
}
const impar = (elemento2) => {
    if (elemento2 % 2 == 1) {
        return elemento2
    }
}

console.log(vetor.filter(par).length)

console.log(vetor.filter(impar).length)