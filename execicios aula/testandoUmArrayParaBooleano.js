

function bouncer(arr) {
    const casosFalsos = (acumulador) => {
       return  teste = (acumulador === "" ||acumulador === false || !acumulador == isNaN(Number.NaN)|| acumulador === 0|| acumulador === undefined || acumulador === null ) ? false : true    
    }
    let  result =  arr.filter(casosFalsos)
      return result
  }
  
  bouncer(([false, null, 0, NaN, 7, ""]))
  