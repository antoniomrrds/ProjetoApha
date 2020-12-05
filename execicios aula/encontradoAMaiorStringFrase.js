
function findLongestWordLength(str) {
   
    // let regexEspaco = /\S/g//para remover os espaços 
    // let regex = str.match(regexEspaco).join()
     let a = str.split(' ')

    let resultado = [];
   
    for (let index = 0; index < a.length; index++) {
        resultado[index]= a[index].length;
    }
    
    const maior = (acumulador, atual) => {
        return acumulador > atual ? acumulador : atual
    }
    const acumulador = resultado
    console.log(acumulador.reduce(maior))
}
findLongestWordLength("What if we try a super-long word such as otorhinolaryngology");
