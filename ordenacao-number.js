var lista = [10,1, 5, 9, 8, 12, 15];

console.log(lista);

console.log(lista.sort()); // ordena de forma Unicode repetindo o maior número inicial. 

console.log(lista.sort((a,b) => a-b));  // função trabalhada em js ES6, passando a lista através de uma função sort() trabalhando os valores em sequencia analisando o retorno através de uma arrow functions. 