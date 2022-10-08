class SmartHike {
    constructor(username) {
        this.username = username;
        this.goals = {}
        this.listOfHikes = []
        this.resources = 100;
    }

    addGoal(peak, altitude) {
        if (this.goals.hasOwnProperty(peak)) {
            return `${peak} has already been added to your goals`;
        }

        this.goals[peak] = altitude;
        return `You have successfully added a new goal - ${peak}`;
    }

    hike(peak, time, difficultyLevel) {
        if (!this.goals.hasOwnProperty(peak)) {
            throw new Error(`${peak} is not in your current goals`);
        }

        if (this.resources === 0) {
            throw new Error('You don\'t have enough resources to start the hike');
        }

        let difference = this.resources - (time * 10);

        if (difference < 0) {
            return 'You don\'t have enough resources to complete the hike';
        }
        this.resources -= time * 10;
        this.listOfHikes.push({peak, time, difficultyLevel});
        return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`
    }

    rest(time) {
        this.resources += time * 10;
        if (this.resources >= 100) {
            this.resources = 100;
            return `Your resources are fully recharged. Time for hiking!`;
        } else {
            return `You have rested for ${time} hours and gained ${time * 10}% resources`;
        }
    }

    showRecord(criteria) {
        if (this.listOfHikes.length === 0) {
            return `${this.username} has not done any hiking yet`;
        }

        if (criteria === 'all') {
            return 'All hiking records:\n' +
                this.listOfHikes
                    .map(h => `${this.username} hiked ${h.peak} for ${h.time} hours`)
                    .join('\n');
        }

        const hikes = this.listOfHikes
            .filter(x => x.difficultyLevel === criteria)
            .sort((a, b) => b.time - a.time);

        if (hikes.length > 0) {
            return `${this.username}'s best ${criteria} hike is ${hikes[0].peak} peak, for ${hikes[0].time} hours`
        }

        return `${this.username} has not done any ${criteria} hiking yet`
    }
}

// const user = new SmartHike('Vili');
// console.log(user.addGoal('Musala', 2925));
// console.log(user.addGoal('Rui', 1706));
// console.log(user.addGoal('Musala', 2925));
// --------------------------------------------
// const user = new SmartHike('Vili');
// console.log(user.addGoal('Musala', 2925));
// console.log(user.addGoal('Rui', 1706));
// console.log(user.hike('Musala', 8, 'hard'));
// console.log(user.hike('Rui', 3, 'easy'));
// console.log(user.hike('Everest', 12, 'hard'));
// const user = new SmartHike('Vili');
// console.log(user.addGoal('Musala', 2925));
// console.log(user.hike('Musala', 8, 'hard'));
// console.log(user.rest(4));
// console.log(user.rest(5));

let newHike = new SmartHike('Vili');

newHike.addGoal("Musala", 2925);
newHike.hike("Musala", 8, "hard");
newHike.showRecord("easy");
newHike.addGoal("Vihren", 2914);
newHike.hike("Vihren", 4, "hard");
newHike.showRecord("hard");
newHike.addGoal("Rui", 1706);
newHike.hike("Rui", 3, "easy");
newHike.showRecord("all");
