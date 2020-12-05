// 14) Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
// casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
// escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
// também um default, que retornará uma mensagem de erro no console.




const feira = (produtos) => {
    switch (produtos) {
        case 'maça': 
            console.log('Não vendemos esta fruta aqui')
            break;
    
        case 'Kiwis': 
            console.log('Estamos com escassez de kiwis')
            break;
    
        case 'melancia': 
            console.log('Aqui Está São 3 reais o quilo')
            break;
    
        default:
            console.log('Desculpe não possuo este produto ainda')
            break;
    }

}
feira('laranja')