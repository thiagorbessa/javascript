const nume1 = 10, num2 = 12;
console.log(num1 == num2);//voltara falso
console.log(num1 === "10");//voltara falso porque 3 === compara valor e tipo
console.log(num1 == "10");//voltara true pois so compara o valor 

console.log(num1 != num2);//voltara true porque num1 é diferente de num2
console.log(num1 !== "10");//voltara true porque esse operador compara o valor e o tipo
console.log(num1 != "10");//voltara false porque so compara o valor
console.log(num1 >= "10");
console.log(num1 > "10");
console.log(num1 <= "10");
console.log(num1 < "10");

//// conjuncoes logicas

const idadePessoa1 = 20;
const idadePessoa2 = 39;

console.log(idadePessoa1 >= 18 && idadePessoa2 >=18);//retorna true se as duas sentencas for verdadeira
// ou é ||
console.log(!true);//retorna false

console.log(!(idadePessoa1 >= 18));//retorna false, primeiro true depois inverte
