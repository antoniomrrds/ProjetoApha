//12) Faça um algoritmo que calcule o fatorial de um número.

function fatorial(numero) {
    let fact = []


    for (fact = 1; numero > 1; numero = numero - 1) {
        fact = fact * numero;
    }
    console.log(fact)
}


fatorial(6)
