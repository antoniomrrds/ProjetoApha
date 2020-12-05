 
// 02)	Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:	  
// Equilátero: Os três lados são iguais. Isósceles:  Dois lados iguais. Escaleno: Todos os lados são diferentes.  Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo). 


const condicaoDeExistencia = (ladoA, ladoB, ladoC) => {

    let total = ladoA + ladoB
    let total2 = ladoC + ladoB
    let total3 = ladoA + ladoC
    
    if(total > ladoC && total2 > ladoA && total3 > ladoB){
         console.log(`Comprimento do lado A : ${ladoA} comprimento lado B : ${ladoB} comprimento lado  : ${ladoC} Ele e um triângulo`)
         if(ladoA == ladoB && ladoB == ladoC && ladoA==ladoC){
            console.log("Este e um triângulo Equilátero")
         }else if(ladoA == ladoB || ladoB == ladoC || ladoA==ladoC){
             console.log("Este e um triângulo isóceles")
         }else{
             console.log("Este e um triângulo Escaleno")
         }
         

    }else{
        console.log("Não e um triângulo pois não satisfaz a consição de existência ")
    }

    
}

condicaoDeExistencia(2,3,4)
condicaoDeExistencia(4,2,4)
condicaoDeExistencia(1,2,8)
condicaoDeExistencia(8,7,8)
condicaoDeExistencia(2,5,2)
condicaoDeExistencia(3,4,3)
condicaoDeExistencia(2,2,2)
condicaoDeExistencia(6,12,5)
condicaoDeExistencia(2,8,4)



