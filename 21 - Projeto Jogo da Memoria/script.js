//constantes para representar as classes das cartas
const FRONT = "card_front";
const BACK = "card_back"
const CARD = "card"
const ICON = "icon"


startGame()
function startGame(){

    initializeCards(game.createCardsFromApps());
}

function initializeCards(cards){
    let gameboard = document.getElementById('gameboard');
    gameboard.innerHTML = ''
    console.log(gameboard)
    game.cards.forEach(card =>{
        let cardElement = document.createElement('div');
        cardElement.id = card.id;
        cardElement.classList.add(CARD);
        cardElement.dataset.icon = card.icon;

        createCardContent(card, cardElement)

        cardElement.addEventListener('click',flipCard)
        gameboard.appendChild(cardElement);
         
    })


}
// CRIA CARTA NO JOGO MESMO

function createCardContent(card, cardElement){
    createCardFace(FRONT, card, cardElement);
    createCardFace(BACK, card, cardElement);
}

// createCardContent(card, cardElement)

function createCardFace(face, card, element){
    let cardElementFace = document.createElement('div');
    cardElementFace.classList.add(face);
    if(face === FRONT){
        let iconElement = document.createElement('img');
    console.log(face)
        iconElement.classList.add(ICON)
        iconElement.src = "./assets/"+ card.icon + ".png"
        cardElementFace.appendChild(iconElement);
    } else{
       cardElementFace.innerHTML = '&lt/&gt';
    }
    element.appendChild(cardElementFace);

}









//função para Virar as cartas
function flipCard(){

    if(game.setCard(this.id)){
        this.classList.add('flip');
        if(game.secondCard){
        if(game.checkMatch()){
            game.clearCards()
            if(game.checkGameOver()){
                let gameOverLayer = document.getElementById('gameOver');
                gameOverLayer.style.display = 'flex'
            }
        }else{
           setTimeout(()=>{
                let firstCardView = document.getElementById(game.firstCard.id);
                let secondCardView = document.getElementById(game.secondCard.id);
            firstCardView.classList.remove('flip');
            secondCardView.classList.remove('flip');
            game.unflipCards();
        
        },900);           

        };
    }
    };

    
}

function restart(){
    game.clearCards()
    startGame()
    let gameOverLayer = document.getElementById('gameOver');
    gameOverLayer.style.display = 'none'
}