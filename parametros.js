
// parametros de função
function soma(num1, num2) {
    return num1 + num2;  
}

console.log(soma(2,3));
console.log(soma(200,45));
console.log(soma(-500,60));
console.log(soma(201,345));


// parâmetros x argumentos 
// ordem dos parâmetros

function nomeIdade(nome,idade){
    return `Meu nome é ${nome}, tenho a idade de ${idade}.`
}
console.log(nomeIdade("thiago",42));

//Passando um valor padrão para o argumento
function multiplica(numero1 = 1, numero2 = 1){ // valor defalt do parametro = 1
    return numero1*numero2;
}
console.log(multiplica(soma(2,3),soma(4,5)));

// esquecendo de passar um dos parâmetros ocasiona o erro NaN (nemro * undefined) NaN 
//para resolver isso passamos um valor default para o argumento que falta.
console.log(multiplica(soma(2,3)));