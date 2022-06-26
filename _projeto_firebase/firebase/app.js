// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDDZmiBqJmPWsPUA7CSZNye2PDBWqYAeLQ",
//   authDomain: "colegio-7f82a.firebaseapp.com",
//   projectId: "colegio-7f82a",
//   storageBucket: "colegio-7f82a.appspot.com",
//   messagingSenderId: "967320163868",
//   appId: "1:967320163868:web:afa7609e4be6c7c44ab1d9",
//   measurementId: "G-XNCKM7P4T0"
// };
// //Variável importada do arquivo da importação
// firebase.initializeApp(firebaseConfig);
// const TURMA = "turmaA";
// // retorna a database
// let db = firebase.firestore();


// //-----------------------------------------------
// // Ler todos os dados de uma coleção que é uma promise
// // db.collection('turmaA').get().then((result) => {
// //   result.forEach((res)=>{
// //     // let aluno = res.data()
// //     // console.log(aluno.nome)})  
// //     console.log(res)})  
// // }).catch((err) => {
// //   console.log(err)
// // });
// //-----------------------------------------------
// // ler um registro específico com identificador.
// // let docRef = db.collection(TURMA).doc('8BdQdhQrbaD6sQa5H4cy')
// // docRef.get().then((doc)=>{
// //   let aluno = doc.data();
// //   console.log(aluno.nome, aluno.sobrenome);

// // });
// //-----------------------------------------------
// //Fazer buscas com parâmetros definidos
// // let btn = document.getElementById('envia');
// // let form = document.getElementById('formulario');


// // db.collection(TURMA).where(campo,'==',pessoa1).get()
// // .then((snapshot)=>{
// //   snapshot.forEach((doc)=>{

// //     console.log(doc.data());
// //   });
// // });

// /* ------Formulário que busca parâmetros */

// // form.addEventListener('submit', (e) => {
// //   e.preventDefault()
// //   let campo1 = document.getElementById('campo1').value;
// //   let campo2 = document.getElementById('campo2').value;
// //   let valor = document.getElementById('seleciona').value;
// //   switch (campo2) {
// //     case '0':
// //     case '1':
// //     case '2':
// //     case '3':
// //     case '4':
// //     case '5':
// //     case '6':
// //     case '7':
// //     case '8':
// //     case '9':

// //       campo2 = parseInt(campo2);
// //       break;
// //     default:
// //       campo2 = campo2;
// //   }
// //   console.log(campo2)
// //   geraResultado(campo1, valor, campo2)

// // })

// // function geraResultado(campo1, valor, campo2) {
// //   db.collection(TURMA).where(campo1, valor, campo2).get()
// //     .then((snapshot) => {
// //       snapshot.forEach((doc) => {
// //         console.log(doc.data());
// //       });
// //     }).catch((err) => {
// //       console.log(err)
// //     })
// // }

// /*Adicionar documentos ao banco de Dados */
// //add insere com ID automaticamente
// // db.collection(TURMA).add({
// //   nome: "Patolino",
// //   sobrenome: "Silva",
// //   notas: {nota1: 9.6, nota2: 7.5},
// // }).then(console.log('Inserido com sucesso')).catch(e=>{
// //   console.log(e)
// // })

// //Adicionando um elemento na DataBase definindo um ID
// // db.collection(TURMA).doc('LoneyTunes').set({
// //        sobrenome: 'Rick',
// //        //Merge serve para fingir uma mesclagem 

// //   },{merge: true}).then((doc)=> {
// //     console.log("Doc Inserido",doc);
// //     //Set não retorna Objeto, apenas o ADD
// //   })
// //   .catch(e => {
// //     console.log(e)
// //   })
// //   //Set Sobrescreve Dados.

// //Utilizar UPDATE para atualizar dados
// // db.collection(TURMA).doc('CM0PYpRY1scdZIp9uAgR').update({
// //   'notas.nota1': firebase.firestore.FieldValue.increment(-4),
// //   'notas.nota2': firebase.firestore.FieldValue.increment(-3)
// // }).then((doc) => {
// //   console.log('Atualizado', doc)
// // }).catch(e => {
// //   console.log(e)
// // })

// /* Observar Database para mudanças/alterações onSnapshot */
// //não precisa de get() não é mais uma promise - não precisa de then
// // Abaixo para uma coleção inteira
// // db.collection(TURMA).onSnapshot(
// //   (result) => { result.forEach(element => {
// //      let aluno = element.data();
// //     console.log(aluno);  
// // });  
// // });

// //Para um documento apenas
// // let umDoc = db.collection(TURMA).doc('H1jRIU2Q9dmEplPDPPVR');

// // umDoc.onSnapshot(snapshot=>{

// //       console.log(snapshot.data());

// //   })
// // function update(){
// //   umDoc.update({
// //     'notas.nota1':firebase.firestore.FieldValue.increment(1),
// //   })
// // }
// //   // setInterval(update,4000);


// /* Para Where */

// // db.collection(TURMA).where('notas.nota1', '>', 5).onSnapshot((snapshot) => {
// //   snapshot.forEach(snap => {
// //     console.log(snap.data())
// //   })
// // })

// /*Aprender a Apagar um documento ou campos do documento */

// //Campo
// // db.collection(TURMA).doc('CM0PYpRY1scdZIp9uAgR').update({
// //   notas: firebase.firestore.FieldValue.delete()
// // }).then(()=>{console.log('Campo Apagado com sucesso')}).catch((e)=>{console.log(e)});

// //Documento inteiro
// // db.collection(TURMA).doc('CM0PYpRY1scdZIp9uAgR').delete().then((doc)=>{console.log('Documento Apagado'), doc}).catch(()=>{console.log('Houve Algum erro', e)})

// /*Criando e Deletando usuários */
// //Para usar o autentication é necessário estar com o módulo do firebase ativo

// // let auth = firebase.auth(); //método para adionar o usuário

// // // //Função que cria o usuário
// // // let newUserEmail;
// // // let newUserPassword;
// // function criarUsuario(newUserEmail,newUserPassword) {
// //   auth.createUserWithEmailAndPassword(newUserEmail, newUserPassword)
// //     .then((user) => {
// //       console.log('Inserido', user);
// //     }).catch((error) => {
// //       var errorCode = error.code;
// //       var errorMessage = error.message;
// //       console.log(errorCode, errorMessage)
// //     });
// // }
// //  criarUsuario('teste@teste.com','abc123');



// // //Listar o usuário / logar usuario
// // let userEmail;
// // let userPassword;
// // function logar(userEmail,userPassword) {

// //   auth.signInWithEmailAndPassword(userEmail, userPassword)
// //     .then(loggedUser => {
// //       console.log(auth.currentUser.email);
// //     })
// //     .catch(e => {
// //       console.log(e)
// //     })
// // }

// // // logar();


// // //Criar um observador para Login e logout
// // auth.onAuthStateChanged(user=>{
// //   if(user){
// //     console.log(user);
// //   }else{
// //     console.log("Ninguém Logado");
// //   }
// // })

// // function logout(){
// //   auth.signOut().then(obj=>{console.log(obj)}).catch(e=>{console.log(e)})
// // }

// // setTimeout(logout,2500);
// /**Revisar tudo */

// /* Configurações de sessão de usuário */

// let auth = firebase.auth(); //método para adionar o usuário

// let h1 = document.getElementsByTagName('h1')
// h1[0].addEventListener('click', logar);

// function logar() {
//   let email = 'teste@teste.com';
//   let senha = 'abc123';
//   //setPersistence
//   //LOCAL -> em todas as abas estaremos logados
//   //SESSION -> Apenas em uma aba
//   //NONE -> Atualizou, trocou de aba, tentou reabrir. CAI
//   auth.setPersistence(firebase.auth.Auth.Persistence.NONE)
//     .then(()=> {      
//       auth.signInWithEmailAndPassword(email, senha)
//         .then(() => {
//           console.log('Login efetuado ', auth.currentUser);
//         }).catch(e => {
//           console.log(e.message)
//         })
//     }).catch(err=>{
//       console.log(err)
//     })

// }
// // logar('teste@teste.com','abc123')
// auth.onAuthStateChanged(user => {
//   if (user) {
//     console.log('Logado ', auth.currentUser, auth.currentUser.email);
//   } else {
//     console.log('Ninguém Logado');
//   }
// })
// let h2 = document.getElementsByTagName('h2');

// h2[0].addEventListener('click', logout)

// function logout() {
//   auth.signOut().then(obj => {
//     // window.open(url='https://www.google.com.br', target="_blank");
//     console.log(obj)
//   }).catch(e => {
//     console.log(e)
//   })
//   console.log('Foi')
// }

// //Persistencia do status do Login

// //setPersistence
// //   //LOCAL -> em todas as abas estaremos logados
// //   //SESSION -> Apenas em uma aba
// //   //NONE -> Atualizou, trocou de aba, tentou reabrir. CAI
// //   auth.setPersistence(firebase.auth.Auth.Persistence.NONE)
// //     .then(()=> {      
// //       auth.signInWithEmailAndPassword(email, senha)
// //         .then(() => {
// //           console.log('Login efetuado ', auth.currentUser);
// //         }).catch(e => {
// //           console.log(e.message)
// //         })
// //     }).catch(err=>{
// //       console.log(err)
// //     })

// // }

//Permissões e segurança
/*
Aqui é um outro banco de dados para testar as configurações de segurança.
Favor ler a documentação para maiores informações.
*/

  // Import the functions you need from the SDKs you need


  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBnPTSa_j6iH8peRm-AJhioKKH_OucTU7s",
    authDomain: "testedb-b6a2a.firebaseapp.com",
    projectId: "testedb-b6a2a",
    storageBucket: "testedb-b6a2a.appspot.com",
    messagingSenderId: "609553105387",
    appId: "1:609553105387:web:28988ab47deaaaa56499ae",
    measurementId: "G-FF8L7SK40Q"
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);

let db2 = firebase.firestore();
function ler(){
  db2.collection('testeDB').get().then((result) => {
    result.forEach(snapshot=>{console.log(snapshot.data())})
    
   
  }).catch((err) => {
    console.log(err.message)
  });
  
}
function escrever(){
  db2.collection('testeDB').add({title:'Novo Objeto', numero: Math.floor(Math.random()*100)})
  .then((doc)=>{console.log(doc)})
  .catch(e=>{console.log(e.message)})
}

//Acessar com regras de Banco de dados

// ler();
escrever();

/* 
Escrever apenas se logado
if request.auth.uid !null
ou
if request.auth.uid == 'id do usuário específico'


// - Regras do BD

rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read: if true;
      allow write: if false;
           // request.time < timestamp.date(2022, 7, 18);
    }
  }
}
*/