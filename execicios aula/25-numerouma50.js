//25) Escrever um programa para exibir os números de 1 até 50 na tela.

 let array=[]
for (let numeros = 0; numeros <=50 ; numeros++) {
    const element = array[numeros];
    //forma com array 
     array.push(numeros)
     //forma sem array
    console.log(numeros)
}


console.log(array)