// BlackJack
// Simple blackJack game
let gameObject = {
    gameStarted: false,
    gameOver: false,
    playerWon: false,
    dealerCards: [],
    playerCards: [],
    dealerScore: 0,
    playerScore: 0,
    deck: []
}

//initialize uiMesssages
let uiMessages = {
    gamePlay: {
        gameTitle: "Black Jack scam",
        welcome: "Welcome to Blackjack!",
        start: "Game in progress",
        restart: "Game Ended, Would you like to play again?",
    },
    buttons: {
        newGame: "New Game",
        hitMe: "Hit",
        hold: "Hold Cards",
        abort: "End Game"
    }
}

//initialize Dom Elements to an object
let uiElements = {
    dashboard: {
        gameTitle: document.getElementById('gameTitle'),
        gameProgress: document.getElementById('gameProgress')
    },
    buttons: {
        newButton: document.getElementById('newGame'),
        hitButton: document.getElementById('hitMe'),
        holdButton: document.getElementById('holdCards'),
        abortButton: document.getElementById('abortGame')
    }
}

const title = uiMessages.gamePlay.gameTitle;
const newGame = uiMessages.buttons.newGame;
const hit = uiMessages.buttons.hitMe;
const hold = uiMessages.buttons.hold;
const abort = uiMessages.buttons.abort;

let progress = uiMessages.gamePlay.welcome;

function createDeck() {
    let cardProperties = {
        suits: ["Heart", "Diamond", "Club", "Spade"],
        values: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
    }
    let deck = [];
    for (suitIdx = 0; suitIdx < cardProperties.suits.length; suitIdx++) {
        for (valueIdx = 0; valueIdx < cardProperties.values.length; valueIdx++) {
            let card = {
                suit: cardProperties.suits[suitIdx],
                value: cardProperties.values[valueIdx]
            }
            deck.push(card);
        }
    }
    return deck;
}

function shuffleDeck() {
    for (let i = 0; i < gameObject.deck.length; i++) {
        let swapIdx = Math.trunc(Math.random() * gameObject.deck.length);
        let tmpIdx = gameObject.deck[swapIdx];
        gameObject.deck[swapIdx] = gameObject.deck[i];
        gameObject.deck[i] = tmpIdx;
    }
}

function getNextCard() {
    return gameObject.deck.shift();
}

//event functions
function startGameEvent() {
    uiElements.dashboard.gameProgress.innerText = uiMessages.gamePlay.start;
    gameObject.gameStarted = true;
    gameObject.gameOver = false;
    // Game flow
    // 1. create a deck
    // 2. shuffle
    // 3. deal
    // 4. new card / hold
    // 5. score
    gameObject.deck = createDeck();
    shuffleDeck();
    //  gameObject.dealerCards = [getNextCard(), getNextCard()];
    //  gameObject.playerCards = [getNextCard(), getNextCard()];
}

function abortGameEvent() {
    uiElements.dashboard.gameProgress.innerText = uiMessages.gamePlay.restart;
}


function getCardString(card) {
    return card.value + " of " + card.suit;
}

console.log(getCardString(gameObject.dealerCards));
console.log(getCardString(gameObject.playerCards));


// setting initial values on Dom elements
uiElements.dashboard.gameTitle.innerText = title;
uiElements.dashboard.gameProgress.innerText = progress;
uiElements.buttons.newButton.innerText = newGame;
uiElements.buttons.hitButton.innerText = hit;
uiElements.buttons.holdButton.innerText = hold;
uiElements.buttons.abortButton.innerText = abort;

// // Events Handlers
 uiElements.buttons.newButton.addEventListener('click', startGameEvent);
// uiElements.buttons.abortButton.addEventListener('click', abortGameEvent);