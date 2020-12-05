

function getIndexToIns(arr, num) {
  //return num;
  const arrDuplicado = Array.from(arr)
  //Aqui dupliquei o array para trabalhar com ele
  let result = arrDuplicado.sort(function (a, b) { return a - b })
  //Classifiquei em decrescente
  let i = 0

  while (num > result[i]) { 
    i++
  }
  console.log(i)
}


getIndexToIns([10,20,30,40,50],35);

