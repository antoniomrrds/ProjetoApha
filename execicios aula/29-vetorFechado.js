// 29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
// deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
// deles estão fora do intervalo, escrevendo estas informações.
vetor = [10,11,12,13,14,15,16,17,18,19,20,21,22,23]


function arrayFechado(array) {
    let receptor = []
    let receiver = []
    for (let index = 0; index < array.length; index++) {
        if (array[index] >= 10 && array[index] <=20) {
            receptor.push(array[index]);
        } else {
            receiver.push(array[index]);   
        }     
    }
    console.log(`Os Números entre 10 e 20 São${receptor.length}`)
    console.log(`Os Números Foram desse intervalo São ${receiver.length}`)
    console.log(`Todos os Números São${array.length}`)


}

arrayFechado(vetor)