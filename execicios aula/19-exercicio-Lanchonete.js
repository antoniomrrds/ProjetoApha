// 19) O cardápio de uma lanchonete é o seguinte:
// Código Descrição do Produto Preço
// 100 Cachorro Quente R$ 3,00
// 200 Hambúrguer Simples R$ 4,00
// 300 Cheeseburguer R$ 5,50
// 400 Bauru R$ 7,50
// 500 Refrigerante R$ 3,50
// 600 Suco R$ 2,80
// Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
// a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
// comando switch. Crie um caso default para produto não existente.

function lanchonete(codigo, quantidade) {
    let valorDoLanche
    let nomeDoLanche
        
    switch (codigo) {
        case 100:
            valorDoLanche = quantidade * 3.00
            nomeDoLanche = 'Cachorro Quente'
            break;
        case 200:
            valorDoLanche = quantidade * 4.00
            nomeDoLanche = 'Hambúrguer Simples'
            break;
        case 300:
            valorDoLanche = quantidade * 5.50
            nomeDoLanche = 'Cheeseburguer'
            break;
        case 400:
            valorDoLanche = quantidade * 7.50
            nomeDoLanche = 'Bauru'
            break;
        case 500:
            valorDoLanche = quantidade * 3.50
            nomeDoLanche = 'Refrigerante'
            break;
        case 600:
            valorDoLanche = quantidade * 2.80
            nomeDoLanche = 'Suco'
            break;

        default:
        
          return console.log('lanche inexistente')
          
    }

    console.log(`    O Seu ${nomeDoLanche} Ficou Pronto,
    ===================================================
    Quantidade informada ${quantidade} produtos
    ===================================================
    O Preço a ser Pago é R$ ${valorDoLanche.toFixed(2).replace('.',',')}`)
}

lanchonete(600,3 )
