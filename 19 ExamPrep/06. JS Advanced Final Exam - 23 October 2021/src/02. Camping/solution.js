class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location
        this.priceForTheCamp = {"child": 150, "student": 300, "collegian": 500};
        this.listOfParticipantsMap = {};
    }

    get listOfParticipants(){
        return Object.values(this.listOfParticipantsMap);
    }

    registerParticipant(name, condition, money) {
        if (!this.priceForTheCamp.hasOwnProperty(condition)) {
            throw new Error('Unsuccessful registration at the camp.');
        }

        if (this.listOfParticipantsMap.hasOwnProperty(name)) {
            return `The ${name} is already registered at the camp.`;
        }
        if (this.priceForTheCamp[condition] > money) {
            return 'The money is not enough to pay the stay at the camp.'
        }

        this.listOfParticipantsMap[name] = {name: name, condition: condition, power: 100, wins: 0};
        return `The ${name} was successfully registered.`
    }

    unregisterParticipant(name) {
        if (!this.listOfParticipantsMap.hasOwnProperty(name)) {
            throw new Error(`The ${name} is not registered in the camp.`);
        }
        delete this.listOfParticipantsMap[name];
        return `The ${name} removed successfully.`
    }

    timeToPlay(typeOfGame, participant1, participant2) {
        if (typeOfGame === 'Battleship') {
            this.ensureExists(participant1);

            this.listOfParticipantsMap[participant1].power += 20;
            return `The ${participant1} successfully completed the game ${typeOfGame}.`
        } else {
            this.ensureExists(participant1, participant2)
            if (this.listOfParticipantsMap[participant1].condition !== this.listOfParticipantsMap[participant2].condition) {
                throw new Error(`Choose players with equal condition.`);
            }
            if (this.listOfParticipantsMap[participant1].power > this.listOfParticipantsMap[participant2].power) {
                this.listOfParticipantsMap[participant1].wins++;
                return `The ${participant1} is winner in the game ${typeOfGame}.`
            } else if (this.listOfParticipantsMap[participant1].power < this.listOfParticipantsMap[participant2].power) {
                this.listOfParticipantsMap[participant2].wins++;
                return `The ${participant2} is winner in the game ${typeOfGame}.`
            } else {
                return `There is no winner.`
            }
        }
    }

    ensureExists(...participants) {
        participants.forEach(p => {
            if (!this.listOfParticipantsMap.hasOwnProperty(p))
                throw new Error('Invalid entered name/s.');
        });
    }

    toString() {
        return `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}\n` +
            this.listOfParticipants
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
