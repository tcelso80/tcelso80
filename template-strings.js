const nome = "Thiago";
const idade = 2021 - 1980;
const cidadeNascimento = "Recife - PE";

// concatenaçã padrão +
let apresentacao = "Meu nome é " + nome + ", tenho " + idade + " anos e nasci em " + cidadeNascimento + "." ;
console.log(apresentacao);

// tamplate string  (acento grave) (aceita quebra de linha) ES6
let apresentacao2 = `Meu nome é ${nome}, tenho ${idade} anos e nasci em ${cidadeNascimento}
vou ser exelente profissional em java Script.`;

console.log(apresentacao2);