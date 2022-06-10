//forma declarativa de função
function minhaFunacao(param){
    //bloco do código 
};
minhaFunacao("param");


///expressoa de função 
// Não tem o nome(anônimas) da função literalmente, é criada uma variavel const e atribuimos a essa variável a função
const soma = function(num1, num2){return num1+num2};
console.log(soma(1,1));


// diferenças proncipais entre elas : HOISTING
// funções e var são "listadas" no top no momento da leitura do código pelo node 

console.log(apresentar()); // funciona porque a funcção assim com as Var são puxadas(insadas) para cima do códogo 
function apresentar(){
    return "Olá";
}

console.log(soma); // apresenta erro devido a variável const ainda não ter sido declarada
const soma = function(){return 2 + 2}; 