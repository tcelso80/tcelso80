// == (comparação implecita)

const numero  = 5;
const texto   = "5";

console.log(numero == texto);

// === (comaração explicita) boa prática! 
//Conversão explicita.
console.log(numero === Number(texto));
console.log(String(numero) === texto);


//typeof
console.log(typeof numero);
console.log(typeof texto);

// == só compara o valor 
// === compara o valor e o tipo de dados 


