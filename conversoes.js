// tipo de dados 
// booleanos 

//conversao implícita
const numero = 456; 
const numeroString = "456@";


console.log(numero == numeroString); // dois iguais (==) na comparação. Faz a conversao implícita (iguala os tipos)

// três igauis (===) compara os valores e os tipos

console.log(numero + numeroString); // (+) transforma em uma concatenação


// conversao explícita 

//Number()
//String()

console.log(numero + Number(numeroString)); // soma os valores number 

console.log(String(numero) + numeroString); // 