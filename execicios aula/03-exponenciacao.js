// 03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.

//Primeira versão 
function potencia(base,expoente) {
 total=base**expoente
 console.log(total)   
 }
 potencia(1,2)
 potencia(2,2)
 potencia(150,2)
 //Segunda versão com arow bem menor 
const potencia2 = (base,expoente)=> {total=base**expoente 
  console.log(`A base : ${base} e o expoente: ${expoente} a Potência é : ${total} `) 
 }
potencia2(1,2)
potencia2(2,2)
potencia2(150,2)