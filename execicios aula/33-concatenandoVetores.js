// 33) Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
// quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
// Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
// mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.

const vetorInteiro = [1, 2, 3, 45, 300, 22, 4, 31523]
const vetorString = ["antonio", "joao","romilda", "paula"]
const vetorDouble = [2.5, 3.7, 4.9, 8.10, 2.55, 30.55, 33.5]
const uniao = vetorInteiro.concat(vetorDouble, vetorString)
// const uniao = [].concat(vetorInteiro,vetorString,vetorDouble)

// console.log(uniao)

for (const arrayGeral of uniao) {
    console.log(arrayGeral)
    
}