const prompt =require('readline-sync')

const permissoes = 'aluno'; // 'aluno' || 'professor' || 'admin'

switch(permissoes){
    case'aluno':
    console.log('Voce so pode visualizar as aulas');
    break;
    case'professor':
    console.log('Voce pode alterar as aulas e adicionar excercicios');
    break;
    case'admin':
    console.log('Voce pode fazer o que quiser no sistema');
    break;
    default:
    console.log('nao sei quem voce e no sistema');
    break;
    
}

//if é false se tiver dentro dele, 0 , undefined, null,'' , NaN

//true todos os demais valores