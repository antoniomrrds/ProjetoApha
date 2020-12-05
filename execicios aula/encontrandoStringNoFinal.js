// function confirmEnding(str, target) {
//   // let lastRegex =  /\\ac$\\/gi
//   // let result = lastRegex.test(str);

//   if (!String.prototype.antonio)
//     String.prototype.antonio = function (searchStr, Position) {
//       // This works much better than >= because
//       // it compensates for NaN:
//       if (!(Position < this.length))
//         Position = this.length;
//       else
//         Position |= 0; // round position
//       return this.substr(Position - searchStr.length,
//         searchStr.length) === searchStr;
//     };

//   result = str.antonio(target)
//   console.log(result);


// }
// confirmEnding("Bastian", "a");

//forma do  freecode camp
//metodo slice e igual ao metodo substring do java slice(parametro inicial,parametro final)
// function confirmEnding(str, target) {
//   console.log(str.slice(str.length - target.length) === target)
// }
// confirmEnding("Bastian", "n");

//usando regex

function confirmEnding(str, target) {
  const re = new RegExp(  target+"$",  "gi")
  console.log( re.test(str))
}
confirmEnding("Bastian", "a");