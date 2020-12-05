
//07) Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
//elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
//parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
//-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
//que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
//“Delta é negativo”.

const Bhaskara = (ax2, bx, c) => {
    console.log(`A equação a ser resolvida : ${ax2}x² ${bx}x ${c}`)
    // 1°cálculos

    // delta = b² - 4*a*c

    let delta =[]
    delta = bx ** 2 - (4 * ax2 * c)
    if (delta < 0) {
        return console.log("Delta e negativo , a equação não terá raízes reais")
    }

    //2° Cálculos

    //x = -b +- sqrt(delta)/2*a
    /*
    SQRT= RAIZ QUADRADA
    x = -b +- sqrt(B² -4 * a *c)/2*a
    */
    let xL     
    let xL2      
    console.log(`O valor de Delta: ${delta}`)
    xL  = (-(bx) + Math.sqrt(delta))/(2*ax2)
    xL2 = (-(bx) - Math.sqrt(delta))/(2*ax2)
console.log(`O X linha¹ : ${xL}`)
console.log(`O X linha² : ${xL2}`)
}
Bhaskara(1,-3,2)


