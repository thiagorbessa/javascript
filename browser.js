//importar biblioteca
const prompt = require('readline-sync')

const idade = prompt.question('Qual é a sua idade?');
// vai na tela do browser const idade = window.prompt("Qual sua idade?");
//interecao com o usuario e atribuindo valor a uma variavel
// vai na tela do browser const confirmar = prompt("Tem certeza?");
console.log(" usuario tem", idade,"anos!");
console.log(typeof idade,idade);

///coerSao de tipos

const idadeNumber = Number(idade);//converte a variavel apra numberconsole.log
console.log(typeof idadeNumber,idadeNumber);


console.log(Number("X"));//vai retornar NaN not a number

console.log(String(10), typeof String(10));//converte o 10 nuima string

console.log(Boolean(2));//2 em boleano é verdadeiro, SOMENTE o falso é o zero

//coercao implicita
console.log(1+"1");//11 na some transforma tud em string
console.log(1+"10"+1);//1101
console.log(10-"5"); //5 
console.log(10*"5");//transforma o 5 em numero 50
console.log(10/"5");//2

let n = 1+ '1';//11
n = n-1 //10
console.log(2+3+4+'5');//'95'

console.log('5'+2+3+4);//'5234'

console.log('10'-'4'-'3'-2+'5');//'15'