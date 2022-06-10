//let x = "";
//console.log(x);
//x = "oi";

//Declaração de função
function imprimeTexto (parametro){
   console.error(parametro);
}

// chamada ou execução da função
imprimeTexto("oi");
imprimeTexto("Outro texto");
imprimeTexto(6);
imprimeTexto(true);

imprimeTexto(soma()); //chamando uma função dentro de outra função - 

//três formas de escrever funções em Js 

function soma(){
    // outros códigos
    const resultado = 2 + 2; 
    return resultado; // inclui o return para saida da função
    //Obs: tudo que for escrito após o return não será executado. 
}
console.log(soma() + " ùnica chamada"); 




