console.log("Hello World");
console.log("Estamos na aula 1");
 var nome = "Thiago bessa";
 var idade = 36; //nao é obrigatorio ponto e viurgula
var nomeDoPorfessor = 'Walisson Silva';
//tipagem dinamica
var altura = 1.84;
var estudando = true;

console.log(nome);
console.log(idade);
console.log(nomeDoPorfessor);
console.log(altura);
console.log(estudando);

console.log(typeof nome);//retorna o tipo da variavel
console.log(nome, typeof nome);
var semConteudo;
console.log(semConteudo);//valor indefinido

var curso = 'Front-end em React' , topico = 'JavaScript Básico';

console.log(curso,topico)

//nao utilize mais o var nos codigo javascript

//let voce pode alterar a variavel
let notaDoAluno = 10;

//nao pode alterar o valor da variavel
const mediaDoAluno = 8;

notaDoAluno = 9;// pode ser alterado

console.log(notaDoAluno);

// a variavel var inicia e pode dar indefinido se o codigo estiver na posicao errada e nao atribuir o valor desejado
// isso faz voce poder errar e nao ser mostrado o erro

//operadores matematicos
//+ , - , * , / , %  resto da divisao , ** exponenciacao

const nota1 = 10 , nota2 = 8, somaDasNotas = nota1+nota2;
//poderia ser const nota1 = 10;
//const nota2 = 8
//const somaDasNotas = nota1+nota2;

let mediaDasNotas = somaDasNotas/2;

//let = nota1+ nota2 /2;// a ordem de precedencia vem sempre a (), * /, 
console.log("Soma das notas =", somaDasNotas);
console.log("Media das notas =", mediaDasNotas);

const numero = 16;

console.log('Raiz quadrada de 16',Math.sqrt(numero));//analisar bilioteca Math