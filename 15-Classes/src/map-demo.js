const myMap = new Map();
myMap.set('firstKey',5);
myMap.set('secondKey',3);

console.log(myMap);

for (const entry of myMap) {
    console.log(entry);
}

console.log(myMap.keys());
console.log(myMap.values());

for (const key of myMap.keys()) {
    console.log(key);
}

for (const value of myMap.values()) {
    console.log(value);
}