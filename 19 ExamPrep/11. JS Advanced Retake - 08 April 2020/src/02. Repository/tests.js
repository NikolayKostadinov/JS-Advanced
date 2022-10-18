const {assert} = require('chai');
const {Repository} = require("./solution.js");

describe("Tests …", () => {
    let properties;
    let entity;
    let expected;
    beforeEach(() => {
        properties = {
            name: "string",
            age: "number",
            birthday: "object"
        };
        entity = {
            name: "Pesho",
            age: 22,
            birthday: new Date(1998, 0, 7)
        };
        expected = new Repository(properties)
    })
    describe('Instance of...', () => {

        it('should be instance of Repository', () => {
            assert.equal(expected instanceof Repository, true)
            assert.deepEqual(expected.data, new Map())
        });
        it('test', () => {
            let expected = new Repository(properties);
            assert.equal(expected.nextId(), 0)
        })
    });
    describe('add functionality', () => {
        it('test', () => {
            assert.equal(expected.add(entity), 0)
            assert.equal(expected.add(entity), 1)
            assert.equal(expected.count, 2)
        })
        it('test', () => {
            expected = new Repository({ name: "string", age: "number", birthday: "object" })
            assert.throw( () => expected.add({ hoi: "string", age: "number", birthday: "object"}), Error, 'Property name is missing from the entity!')
        })
        it('test', () => {
            expected = new Repository({ name: "string", age: "number", birthday: "object" })
            assert.throw( () => expected.add({ name: {}, age: "number", birthday: "object"}), TypeError, 'Property name is not of correct type!')
        })

    })
    describe('getId functionality', () => {
        it('test', () => {
            expected.add(entity);
            assert.deepEqual(expected.getId(0), {name: "Pesho", age: 22, birthday: new Date(1998, 0, 7)})
        })
        it('test', () => {
            assert.throw( () => expected.getId(10, {}), Error,  "Entity with id: 10 does not exist!")
        })
    })
    describe('update functionality', () => {
        it('test', () => {
            expected.add(entity);
            expected.add(entity);
            expected.update(1, {name: 'Kolio', age: 18, birthday: new Date(1998, 0, 7)})
            assert.deepEqual(expected.data.get(1), {name: 'Kolio', age: 18, birthday: new Date(1998, 0, 7)})
        })
        it('test', () => {
            expected.add(entity);
            expected.add(entity);
            assert.throw( () => expected.update(1, {name: {}, age: 18, birthday: new Date(1998, 0, 7)}), TypeError, 'Property name is not of correct type!')
        })
        it('test', () => {
            expected.add(entity);
            assert.throw( () => expected.update(0, {hoi: 'Kolio', age: 18, birthday: new Date(1998, 0, 7)}), Error, 'Property name is missing from the entity!')
        })
        it('test', () => {
            assert.throw( () => expected.update(10, {name: 'Kolio', age: 18, birthday: new Date(1998, 0, 7)}), Error,  "Entity with id: 10 does not exist!")
        })
    })
    describe('del functionality', () => {
        it('test', () => {
            expected.add(entity);
            expected.add(entity);
            expected.add(entity);
            expected.del(2)
            let found = expected.data.has(2)
            assert.equal(found, false)
        })
        it('test', () => {
            assert.throw(() => expected.del(10),Error, 'Entity with id: 10 does not exist!')
        })
    })

});
