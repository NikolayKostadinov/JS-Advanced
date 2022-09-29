function solve(cards) {
    const suits = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663'
    };

    const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    const deck = [];
    try {
        for (const card of cards) {
            const face = card.slice(0, -1);
            const suit = card.slice(-1);
            const cardObj = createCard(face, suit)
            deck.push(cardObj);
        }
        console.log(deck.join(' '));
    } catch (ex) {
        console.log(ex.message);
    }


    function createCard(face, suit) {
        if (faces.indexOf(face) === -1 || !suits.hasOwnProperty(suit)) throw Error(`Invalid card: ${face + suit}`);
        return {
            face,
            suit: suits[suit],
            toString() {
                return this.face + this.suit;
            }
        }
    }
}

solve(['AS', '10D', 'KH', '2C']);
solve(['5S', '3D', 'QD', '1C']);
