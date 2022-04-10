//Função para trocar o fundo da página
function ativarTudo(){
let btn = document.getElementById('activeFundoCor');
btn.addEventListener('click', mudaBgCor);

let bodyT = document.getElementById('corpo');  
function mudaBgCor(){
  if(bodyT.className == 'bodyBlack'){
    bodyT.classList.remove('bodyBlack');
    bodyT.classList.add('bodyWhite');
  } else{
    bodyT.classList.remove('bodyWhite');
    bodyT.classList.add('bodyBlack');
  }
  console.log(bodyT.className)
}
}

//Scripts relacionados a Callback/Promisses/Async-Await/Filter,Map etc

let usuarios = ["Nome", "Nome2", "Nome3"];
function insereUsuarios(nome){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      usuarios.push(nome);
      let error = false;
      if(!error){
        resolve()
      } else{
        reject({msg: "Erro meu chapa"})
      }
    },2000)
  });  
}

function lista(){
  console.log(usuarios);
  
}


// insereUsuarios("Deus me Ajuda").then(lista).catch((cat)=>{console.log(cat.msg)});

async function executar(){
  
  try{
    await insereUsuarios('Murilo');
    lista();
  }catch(x){    
      console.log(x.msg);   
  }finally{
    
    
  }
}
executar();