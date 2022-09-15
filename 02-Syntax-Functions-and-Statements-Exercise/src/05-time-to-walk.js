function timeToWalk(steps, lenght, speedInKmPerHour) {
    let distanceInKilomenters = steps * lenght / 1000;
    let timeInSecundes = Math.round((distanceInKilomenters / speedInKmPerHour) * 3600);

    let hours = Math.floor(timeInSecundes / 3600).toString();
    let min = Math.floor((timeInSecundes - hours * 3600) / 60).toString();
    let sec = (timeInSecundes % 60).toString();

    console.log(`${hours.padStart(2,'0')}:${min.padStart(2,'0')}:${sec.padStart(2,'0')}`)
}

timeToWalk(9000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);