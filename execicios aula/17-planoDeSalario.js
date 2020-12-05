// 17) Um funcionário irá receber um aumento de acordo com o seu plano de
// trabalho, de acordo com a tabela abaixo:
// Plano Aumento
// A 10 %
//     B 15 %
//         C 20 %
//             Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
// novo salário.Use a estrutura switch e faça um caso default que indique que o plano é inválido.
function PlanoDeSalario(plano, salarioAtual) {
    let salario
    switch (plano) {
        case "A":
            salario = (0.1 * salarioAtual);
            break;
        case "B":
            salario = 0.15 * salarioAtual;
            break;
        case "C":
            salario = 0.20 * salarioAtual;
            break;
        default:
            console.log('Plano incorreto favor colocar um Plano aceitável')
            break;

    }

    let novoSalario = salario + salarioAtual

    console.log(`Salário antigo: ${salarioAtual} Plano de Trabalho : ${plano} Novo Salário : ${novoSalario}`)
}

PlanoDeSalario("A", 1200)