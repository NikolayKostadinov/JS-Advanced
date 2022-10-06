const obj = {
    name: 'peter',
    age: 23
}

console.log(Object.getOwnPropertyDescriptors(obj));

Object.defineProperty(obj, 'name', {enumerable: false});

console.log('---------------------------')
console.log(Object.getOwnPropertyDescriptors(obj));

console.log(Object.keys(obj));

Object.defineProperty(obj, 'lastName', {
    get() { return this._lastName; },
    set(value) {
        if (typeof value != 'string'){
            throw new TypeError('Last name must be a string');
        }
       this._lastName = value;
    },
    enumerable: true,
    configurable: true
});

obj.lastName = 'Peshev';

console.log(obj);

obj.lastName = 0;