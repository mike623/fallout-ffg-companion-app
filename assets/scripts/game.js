let settlementDeck = [];
let wastelandDeck = [];
let vault007Deck = [];
let vault077Deck = [];
let vault084Deck = [];
let vault109Deck = [];

settlementDeck = [...baseSettlement];
wastelandDeck = [...baseWasteland];

const shuffle = (arr) => {
    let length = arr.length - 1;
    for (let i = length; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        const temp = arr[i]
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}

settlementDeck = shuffle(settlementDeck);
wastelandDeck = shuffle(wastelandDeck);

const loadDecks = () => {
    const cardDecks = document.querySelectorAll(".cardDeck");
    for (let i=0; i<cardDecks.length; i++){
        let deckEl = cardDecks[i];
        let deckId = cardDecks[i].id;
        deckEl.addEventListener("click", function() {
            checkForCards(deckId);
        })
    };    
}

const checkForCards = (el) => {
    const deck = document.getElementById(el);
    deck.classList.contains("loaded") ? displayTopCard(el) : null;
}

const displayTopCard = (el) => {
    let displayCard, displayCardLocal;
    if (el === "settlementDeck"){
        displayCard = settlementDeck[0];
        displayCardLocal = document.getElementById("settlementDeckDisplay");
    } else if (el === "wastelandDeck"){
        displayCard = wastelandDeck[0];
        displayCardLocal = document.getElementById("wastelandDeckDisplay");
    } else if (el === "vault084Deck"){
        displayCard = vault084Deck[0];
        displayCardLocal = document.getElementById("vault084DeckDisplay");
    } else if (el === "vault109Deck"){
        displayCard = vault109Deck[0];
        displayCardLocal = document.getElementById("vault109DeckDisplay");
    }
    console.log(displayCard);
    console.log(displayCardLocal.id);
};

loadDecks();