//Formatação de numeros em Js

const numero1 = 10;
const numero2 = .334578;

function somaNumerosNormal(a,b,p){

   if (p == 0) { // Passagem normal de números 

     return console.log((a + b) + " --> Normal");

   } 
    
   if (p == 1) { //Math.round()  Arredonda para o inteiro mais atual, arredonda para o maior inteiro 

    return console.log((Math.round(a + b)) + " --> Math.round()");

  } 

  if (p == 2) { //.toFixed() //  arredonda e exibe a quantidade de casas decimais que eu definir no parâmetro, arredonda para o maior inteiro 

    const total = (a + b)
    
    return console.log((total.toFixed(2)) + " --> .toFixed(2)");

  } 

  if (p == 3) { //toLocaleString() //permite que eu exiba o valor no formato da moeda que eu queira, no caso do Brasil o real R$Math.ceil() que retorna o maior número inteiro que é maior que o número passado, por exemplo Math.ceil(11.123), o valor fica 12

    const total = (a + b)

    const totalFormatado = total.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'}); 
    
    return console.log(totalFormatado + "--> toLocaleString()");

  } 

  if (p == 4) { //(Math.ceil retorna o maior número inteiro que é maior que o número passado, por exemplo Math.ceil(11.123), o valor fica 12

    return console.log((Math.ceil(a + b)) + "--> Math.ceil()");

  } 

  
  if (p == 5) { // Math.floor retorna o menor número inteiro que é menor que o número passado, por exemplo Math.floor(11.789), o valor fica 11

    return console.log((Math.floor(a + b)) + " --> Math.floor()");

  } 
    

};


for (var i = 0; i <= 5; i++){

    const exibeResultado = somaNumerosNormal(numero1,numero2,i); 

}












//Math.floor(11.123) // que retorna o maior número inteiro que é maior que o número passado, por exemplo Math.ceil(11.123), o valor fica 12
//Math.floor(11.789) //  que retorna o menor número inteiro que é menor que o número passado, por exemplo Math.floor(11.789), o valor fica 11
