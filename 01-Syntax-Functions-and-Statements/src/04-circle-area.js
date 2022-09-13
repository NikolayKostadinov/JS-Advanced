function circleAria(radius) {
    if (typeof radius === "number") {
        console.log((Math.PI * (radius ** 2)).toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof radius}.`);
    }
}

circleAria(5);
circleAria('name');
