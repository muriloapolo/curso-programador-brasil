let game = {
    lockMode: false,
    firstCard: null,
    secondCard: null,

    apps: [
        'chrome',
        'kombi',
        'mail',
        'netflix',
        'pokemon',
        'whats'
    ],


    setCard: function(id){

       let card = this.cards.filter(card=> card.id === id)[0];
        if(card.flipped || this.lockMode){
            return false
        }
        if (!this.firstCard){
            this.firstCard = card;
            this.firstCard.flipped = true
            return true;
        } else{
            this.secondCard = card;
            this.secondCard.flipped = true
            this.lockMode = true;
            return true
        }
    },
checkMatch:function(){
    if(!this.firstCard || !this.secondCard){
        return false
    }
    return this.firstCard.icon === this.secondCard.icon
},

clearCards: function(){
    this.firstCard = null;
    this.secondCard = null;
    this.lockMode = false;
},
unflipCards(){
    this.firstCard.flipped = false;
    this.secondCard.flipped = false;
    this.clearCards()
},
checkGameOver(){
    return this.cards.filter(card =>!card.flipped).length == 0;
},

    
cards : null,
//Cria dinamicamente as cartas

createCardsFromApps: function() {
    this.cards = [];
   
        this.apps.forEach((app)=>{this.cards.push(this.createPairFromApps(app))})
    this.cards =  this.cards.flatMap((pair) => pair);
    this.shuffleCards()
    return this.cards

},

createPairFromApps: function(app) {
    return [
        //Carta Fundo
        {
            id: this.createIdWithApps(app),
            icon: app,
            flipped: false

        },
        //Carta Frente
        {
            id: this.createIdWithApps(app),
            icon: app,
            flipped: false
        }
    ]
},


//Crea ID proceduralmente

createIdWithApps: function(app) {
    return app + parseInt(Math.random() * 1000)
},
shuffleCards: function(cards){
    let currentIndex = this.cards.length;
    let randomIndex = 0;

    while(currentIndex !== 0){

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [this.cards[randomIndex], this.cards[currentIndex]] = [this.cards[currentIndex], this.cards[randomIndex]];
    }
}
}