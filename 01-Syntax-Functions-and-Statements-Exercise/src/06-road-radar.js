function roadRadar(speed, limitType) {
    let limits = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20,
    };

    let speedLimit = limits[limitType];
    if (speedLimit >= speed) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    } else if(speedLimit < speed && speed <= speedLimit + 20){
        console.log(`The speed is ${speed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - speeding`)
    } else if(speedLimit + 20 < speed && speed <= speedLimit + 40){
        console.log(`The speed is ${speed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - excessive speeding`)
    } else {
        console.log(`The speed is ${speed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - reckless driving`)
    }
}

roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');
