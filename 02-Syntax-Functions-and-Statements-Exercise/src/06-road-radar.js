//•	On the motorway, the limit is 130 km/h
// •	On the interstate, the limit is 90 km/h
// •	In the city, the limit is 50 km/h 
// •	Within a residential area, the limit is 20 km/h

function roadRadar(speed, area) {
    const limit = {};
    limit.motorway = 130;
    limit.interstate = 90;
    limit.city = 50;
    limit.residential = 20;

    let difference = speed - limit[area];

    if (difference <= 0) {
        console.log(`Driving ${speed} km/h in a ${limit[area]} zone`);
    } else {

        let status = '';
        if (difference <= 20) {
            status = 'speeding';
        } else if (difference <= 40) {
            status = 'excessive speeding';
        }
        else {
            status = 'reckless driving';
        }
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit[area]} - ${status}`)
    }
}

roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');
