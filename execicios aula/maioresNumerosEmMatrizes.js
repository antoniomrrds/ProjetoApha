

  let result =[[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]] 

function maiorNumeroEmMatriz(num) {
  
  let arrayConvertida = Array.from(num)
  let newArr =[]
  
  for (let L = 0; L< num.length; L++){
    const maior = (acumulador, atual) => {

      console.log(  acumulador > atual ? acumulador : atual)
    }
    let endResult = arrayConvertida[L].reduce(maior)
    newArr.push(endResult)
  }
  console.log(newArr)

  }
  maiorNumeroEmMatriz(result)

  
// metodo do free code camp 
function largestOfFour(arr) {
  console.log( arr.map(Function.apply.bind(Math.max, null)))
}
largestOfFour(result)