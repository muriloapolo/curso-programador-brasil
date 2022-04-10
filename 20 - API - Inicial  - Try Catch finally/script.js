let url = "https://economia.awesomeapi.com.br/json/last/USD-BRL";

function converter() {
    let input = document.getElementById('valor');
    let valor = input.value;
    if(valor){
        valor = valor.replace(/,/,'.')
    } 

    fetch(url).then((res) => {
        return res.json()
    }).then((data) => {
        let rate = data.USD.ask;
        let calculo = document.getElementById('resultado');       
        let cambio = Math.floor(rate * valor)        
        calculo.innerHTML = `$:${valor} dólare(s) equivalem a aproximadamente R$:${cambio} real(is)`;

    }).catch((err) => {
        
        console.log(err)
    })

}


/* Tratamento de ERROS - Try Catch throw */

/* 
let nome = ''
try{
    if(nome == "" || nome == undefined){
        throw "O nome não pode ser Vazio"

    }
    console.log(nome);
} catch(err){
    console.log('Houve um erro ',err)
} finally{
    console.log('Boa noite');
}


*/