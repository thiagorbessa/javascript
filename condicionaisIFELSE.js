const prompt =require('readline-sync')

const idade = Number(prompt.question('Qual a sua idade? '))//le do usuario e transforma em number

const eMaiorDeIdade = idade >= 18;//retorna verdadeiro se for maior ou igual ou false se for menor que 18

if(eMaiorDeIdade){
    console.log('Voce é maior de idade!');
}
else
    console.log('Voce nao é maior de idade!');
const mediaDoAluno = 10;

if(mediaDoAluno >= 7){
    console.log("Aprovado!")
}
else if(mediaDoAluno >= 5){
    console.log("Prova final!")
}
else{
    console.log("Reprovado!")
}

const idadePessoa =18;
const temCNH = true;

if (idadePessoa >= 18 && temCNH){
    console.log("Pode Dirigir!")
}
else{
    console.log("Nao pode dirigir!")
}

//if é false se tiver dentro dele, 0 , undefined, null,'' , NaN

//true todos os demais valores