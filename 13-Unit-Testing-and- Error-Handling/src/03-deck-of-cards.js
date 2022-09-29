function solve(cards) {


    const deck = [];

    for (const card of cards) {
        const face = card.slice(0, -1);
        const suit = card.slice(-1);
        try {
            const cardObj = createCard(face, suit)
            deck.push(cardObj);
        } catch (ex) {
            console.log(`Invalid card: ` + card);
            return;
        }
    }
    console.log(deck.join(' '));


    function createCard(face, suit) {
        const suits = {
            S: '\u2660',
            H: '\u2665',
            D: '\u2666',
            C: '\u2663'
        };
        const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];


        if (faces.indexOf(face) == -1) throw Error(`Invalid face ${face}!`);
        if (!suits.hasOwnProperty(suit)) throw Error(`Invalid suit ${suit}!`);

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
