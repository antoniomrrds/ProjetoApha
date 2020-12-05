/*06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.*/




//juros simples
/*
J = C * I * T
JUROS(J)
CAPITAL(C)
TAXA DE JUROS (I)
TEMPO DE APLICAÇÃO(T)
*/ 
function jurosSimples(capitalInicial,taxadDeJuros,tempoDeAplicação) {
    let juros = capitalInicial*taxadDeJuros*tempoDeAplicação
 console.log(`O Capita Inicial é ${capitalInicial.toLocaleString('pt-br',{style : 'currency',currency:'BRL'})} A Taxa de Juros ${taxadDeJuros} O Tempo de Aplicação é ${tempoDeAplicação}  O juros Simples é : ${juros.toLocaleString('pt-br',{ style: 'currency', currency: 'BRL' })}`)   
 const montante = capitalInicial+ juros
 
console.log(`O valor do Montante é ${montante.toLocaleString('pt-br',{style: 'currency', currency:'BRL'})}`)
}
jurosSimples(300,0.02,3)

//juros compostos 
/* M = C*(1+I)**T
CAPITAL(C)
MONTANTE(M)
TEMPO(T)
TAXA DE JUROS (I)
*/
function JurosCompostos(capitalInicial,taxadDeJuros,tempoDeAplicação) {
    let montante = capitalInicial*(1+taxadDeJuros)**tempoDeAplicação
     console.log(` O valor em juros compostos ${montante.toLocaleString('pt-br',{ style: 'currency', currency: 'BRL' })}`)
}

JurosCompostos(300,0.02,3)