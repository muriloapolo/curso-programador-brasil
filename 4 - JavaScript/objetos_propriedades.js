//Criando Objetos em Js
//Primeira Forma
let aluno = {
    nome: 'Murilo',
    nota1: [7.5, 8.2]
};
console.log(aluno['nome'], aluno['nota1'][0], aluno['nota1'][1]);
//Criar nova propriedade com a inserção de .nomeDaPropriedade
aluno.matricula = 555888;
console.log(aluno.matricula);
//Pode ser inserido uma nova propriedade com colchetes
//Respeitando suas características
aluno['sobrenome'] = 'Apolonio';
console.log(aluno);
//Pode criar propriedades com variáveis, respeitando suas características
var novaProp = 'apelido';
//Podemos parrar essa propriedade através e apenas através de colchetes
aluno[novaProp] = 'Lilo';
//E o valor é passado atraves da inserção da nova propriedade
/*-----
Não dá pra inserir propriedades com ponto se foi gerada uma variável
Gera uma redundância que inviabiliza o processo de inserção onde o '.' gera a propriedade

*/

//-------Agora tentando inserir propriedades com variáveis
let teste = 'turma'
aluno[teste] = 'ABC';
console.log(aluno);
console.log(aluno.nota1[0])

//Objetos são um conjunto de chaves e valores que podem conter diversos tipos de valores em suas chaves - boolean etc