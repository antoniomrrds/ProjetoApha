// //04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
// e o resto da divisão destes dois valores.

function Divisao(dividendo,divisor) {
  let divisaoExata = dividendo/divisor 
  let restoDivisao = dividendo%divisor
    
    console.log(`O Dividendo é : ${dividendo} E o Divisor é : ${divisor} Divisão Exata ${divisaoExata}`)
    console.log(`O Dividendo é : ${dividendo} E o Divisor é : ${divisor} O resto da Divisão ${restoDivisao}`)
    
    
}
Divisao(2,4)
Divisao(3,4)
Divisao(1,2)