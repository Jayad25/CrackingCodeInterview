function deck() {
    var suits = ['h', 'd', 's', 'c']
    var cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'K', 'Q', 'A']
    var deck = [];

    for (let i = 0; i < cards.length; i++) {
        for (let j = 0; j < suits.length; j++) {
            deck.push(cards[i] + suits[j]);
        }
    }
    return deck;
}


// console.log(deck().length)

function shuffle(deck) {
    var random = Math.random()

    for (let i = 0; i < deck.length; i++) {
        // shuffleArray.push(deck[Math.floor(random * deck.length-1) ])
        let temp = deck[i]
        deck[i] = deck[Math.floor(random * deck.length - 1) + i]
        deck[Math.floor(random * deck.length - 1) + i] = temp;

    }
    return deck
}

console.log(shuffle(deck()))