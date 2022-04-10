//create a object with the name of "myObject" and the properties "name" and "age"
var myObject = [{
    name: "John",
    age: 30
}, {
    name: "Peter",
    age: 25
}, {
    name: "Amy",
    age: 27
}, {
    name: "Hannah",
    age: 35
}, {
    name: "Michael",
    age: 29
}, {
    name: "Sandy",
    age: 32
}, {
    name: "Betty",
    age: 42
}, {
    name: "Richard",
    age: 45
}, {
    name: "Susan",
    age: 43
}, {
    name: "Vicky",
    age: 41
}, {
    name: "Ben",
    age: 37
}];
console.log(myObject);


//Filter

/* Filtra Maior ou = 30*/
function filtraMais30(aluno){
    return aluno.age >= 30
}
/* Filtra Mais de 30 */
function filtraMenos30(aluno){
    return aluno.age < 30
}

console.log('------------------')
console.log('Filtro +/= 30 ',myObject.filter(filtraMais30).sort((a,b)=>{return (b.age - a.age)}).map((a)=> {return a.name}));
console.log('Filtro - 30 ', myObject.filter(filtraMenos30))

console.log(' Filter arrow Function', myObject.filter((x)=>{
    return x.age > 30;
}))
/* ------Não pode usar sinal de adição no console pra imprimir coisas que não serão concatenadas-------*/


//Map
function showName(nomes){
    return nomes.name
}
console.log('------Map com retorno de função-----')
console.log(myObject.map(showName))

console.log('-----Map com For iterado------')
function mostraNomes(){
   for(let i = 0; i< myObject.length; i++){
    console.log(myObject[i].name);
   }
}
mostraNomes()
console.log('------For In---------')
for( let a in myObject){
    console.log(myObject[a].name)
}
console.log('------Map com retorno direto------')
console.log(myObject.map((z)=> z.name))


//Reduce
function soma(n, t){
    return n + t.age;
}
console.log('----Reduce com retorno de função-----')
console.log(myObject.reduce(soma, 0))
console.log('-----Reduceretorno direto no MAP---')
console.log(myObject.reduce((x,k)=> {return x + k.age},0))

console.log('----Reduce retono de string-------');
console.log(myObject.reduce((x,n)=>{return x + n.name},""))

