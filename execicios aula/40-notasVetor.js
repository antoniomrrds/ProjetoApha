// 40) Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
// modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
// conceito B e de 9,0 a 10,0 o conceito A.
vetorNotas = [-1,0.0, 0.1,1,1.1, 2.4,4.9, 2.8, 3.5, 6.7, 9.9, 10.1, 10, 5.5, 4.4, 2.2, 3.9]

// function conceitoD(notasD) {
    
//     if (notasD > -1 && notasD < 5) {
//         return true
//     }
// }
// console.log(vetorNotas.filter(conceitoD))


// console.log(`${vetorNotas.filter(conceitoD)} Estas Notas São de Conceito D`)

for (let index = 0; index < vetorNotas.length; index++) {
    const element = vetorNotas[index];

    if (element > -1 && element < 5) {
        console.log(`Conceito D  ${element}`)
    } else if(element >=5  && element < 7) {
        console.log(`Conceito C ${element}`)
    }
}