function timeToWalk(steps, footprintLength, speed) {
    let distanceInMeters = footprintLength * steps;
    let distanceInKilometers = distanceInMeters / 1000;

    let secondsForRest = Math.floor(distanceInMeters / 500) * 60;
    let time = Math.round(((distanceInKilometers / speed) * 3600) + secondsForRest);

    let hours = Math.floor(time / 3600).toString();
    let minutes = Math.floor(time / 60).toString();
    let seconds = (time % 60).toString();
    console.log(`${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`);
}


timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);
