const usuarioLogado = true; 
const contaPaga = false; 

// truthy ou false  --> São valores que não são boleanos porem se tornam 
// 0 => false 
// 1 => true 

console.log(0 == false); // true resultado da operacao 
console.log("" == false); // true 
console.log(1 == false); // false 1 não e falço 


// null  ==> vazio ou nada 
//undefined 

let minhaVar; 
let varNull = null; 

console.log(minhaVar);
console.log(varNull); 

console.log(typeof minhaVar);
console.log(typeof varNull);  // null é tratado com objeto no java script

let numero = 3;
let texto = "Alura";

console.log(typeof numero);
console.log(typeof texto); 