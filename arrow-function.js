// função padrão 
console.log(funcaoPadao("Thiago"))
function funcaoPadao(paran){
    return paran; 
}

//Expressão de função 
const nome = function expressaoFuncao(){ return "Celso" }; 
console.log(nome());

// arrow function um parametro
const flecha = param => param; 
console.log(flecha("Guimarães"));

// arrow function dois parametros
const flecha2 = (param1, param2) => `${param1} ${param2}`;
console.log(flecha2("e Souza","ama o Senhor Jesus"));

// outro exemplo 
const testeArrowFuction = (p1, p2) =>  p1=p2 ? p2 + 1 : "Errado2"; 
console.log(testeArrowFuction(1,1))

// Hoisting : arrow function se comporta como expressão 

// operador maior/menor ou igual que 
// >=  
// <=

//Arrow function 
// =>