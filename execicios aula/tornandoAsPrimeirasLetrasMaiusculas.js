function titleCase(str) {

   str = str.toLowerCase().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
     return str
  }
  
  titleCase("I'm a little tea pot");
  // string.match(regex)
  // regex.test(str)
  // exemplificando a resposta 
  // ?: - Faz com que a expressão entre parentesis não seja memorizada
  // ^ - Faz o match à primeira letra da string
  // | - Operador "ou"
  // \s - Faz a um espaço em branco
  // \S - Faz match a um caracter que não seja espaço em branco.

