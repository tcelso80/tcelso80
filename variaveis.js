//var  -->  POdemos começar a usar ela antes de declarar. 

var altura  = 5;
var comprimento = 7;

area = altura * comprimento; // podemos usar a mesma em mais de um local do código ocasionando problemas.
console.log(area + ' Usando Var'); 
var area; // declaração --> Depois eu declaro

//let --> So conseguimos usar ela depois que se declara, 

let altura1  = 5;
let comprimento1 = 7;
let forma = 'retângulo'
let area1; 

if (forma === 'retângulo'){

    area1 = altura1 * comprimento1;

} else {

    area1 = (altura1 * comprimento1) / 2;  

}

 console.log(area1  + ' Usando Let'); 
 

//consnt 

const forma1 = 'Quadrado'; 
const altura2 = 2;
const comprimento2 =  5; 
const area2 = 10;  //--> const tem que ter valor atribuido na inicialização, quando iniciada o valor fica constante.  

if (forma1 === 'triangulo'){ 

    area2 = altura2 * comprimento2;

} else {

    area2 = (altura2 * comprimento2) / 2;  

}

 console.log(area2  + ' Usando const'); 

