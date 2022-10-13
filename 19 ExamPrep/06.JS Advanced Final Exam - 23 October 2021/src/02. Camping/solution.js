class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location
        this.priceForTheCamp = {"child": 150, "student": 300, "collegian": 500};
        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {
        if (!this.priceForTheCamp.hasOwnProperty(condition)) {
            throw new Error('Unsuccessful registration at the camp.');
        }
        const recordIx = this.listOfParticipants.findIndex(p => p.name === name)
        if (recordIx !== -1) {
            return `The ${name} is already registered at the camp.`;
        }
        if (this.priceForTheCamp[condition] > money) {
            return 'The money is not enough to pay the stay at the camp.'
        }

        this.listOfParticipants.push({name: name, condition: condition, power: 100, wins: 0});
        return `The ${name} was successfully registered.`
    }

    unregisterParticipant(name) {
        const recordIx = this.listOfParticipants.findIndex(p => p.name === name)

        if (recordIx === -1) {
            throw new Error(`The ${name} is not registered in the camp.`);
        }
        this.listOfParticipants.splice(recordIx, 1);
        return `The ${name} removed successfully.`
    }

    timeToPlay(typeOfGame, participant1, participant2) {
        const recordIx1 = this.listOfParticipants.findIndex(p => p.name === participant1)
        const recordIx2 = this.listOfParticipants.findIndex(p => p.name === participant2)

        if (typeOfGame === 'Battleship') {
            if (recordIx1 === -1) {
                throw new Error('Invalid entered name/s.');
            }

            this.listOfParticipants[recordIx1].power += 20;
            return `The ${participant1} successfully completed the game ${typeOfGame}.`
        } else {
            if (recordIx1 === -1 || recordIx2 === -1) {
                throw new Error('Invalid entered name/s.');
            }
            if (this.listOfParticipants[recordIx1].condition !== this.listOfParticipants[recordIx2].condition) {
                throw new Error(`Choose players with equal condition.`);
            }
            if (this.listOfParticipants[recordIx1].power > this.listOfParticipants[recordIx2].power) {
                this.listOfParticipants[recordIx1].wins++;
                return `The ${participant1} is winner in the game ${typeOfGame}.`
            } else if (this.listOfParticipants[recordIx1].power < this.listOfParticipants[recordIx2].power) {
                this.listOfParticipants[recordIx2].wins++;
                return `The ${participant2} is winner in the game ${typeOfGame}.`
            } else {
                return `There is no winner.`
            }
        }
    }

    toString() {
        return `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}\n` + this.listOfParticipants
            .sort((p1, p2) => p2.wins - p1.wins)
            .map(p => `${p.name} - ${p.condition} - ${p.power} - ${p.wins}`)
            .join('\n');
    }
}

// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200));

// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// //console.log(summerCamp.unregisterParticipant("Petar"));
// console.log(summerCamp.unregisterParticipant("Petar Petarson"));

// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
// console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// //console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
// console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
// console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// //console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
// console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));
//
// console.log(summerCamp.toString());
