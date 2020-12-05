function findElement(arr, func) {

    const result = arr.filter(func)[0] || arr.find(func)
    // o find() ele testa e ja tira a primeira ocorrencia bem mais simples
    // o filter eu precisei setar o a posicao que passou primeiro no teste 
    console.log(result);
    return result
}

findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0);