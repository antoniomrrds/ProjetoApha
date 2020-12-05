//10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
//ou false.


const divisivelpor3 = (numero)=> {
 const div3 = numero%3
 if(div3 == 0){
     return console.log(`O Número : ${numero} e Verdadeiro e divisível por 3`)
 }else{
     return console.log(`O Número : ${numero} e Falso Não e Divisível por 3`)
 } 

    
}
divisivelpor3(14.321)
