const {assert} = require('chai');
const {Repository} = require('./solution');

describe('Repository test suit', () => {

    let properties = {
        name: "string",
        age: "number",
        birthday: "object"
    };

    let entity = {
        name: "Pesho",
        age: 22,
        birthday: new Date(1998, 0, 7)
    };
    let anotherEntity = {
        name: 'Stamat',
        age: 29,
        birthday: new Date(1991, 0, 21)
    };
    let repository;

    beforeEach(() => {
        // Initialize props object
        let properties = {
            name: "string",
            age: "number",
            birthday: "object"
        };

        // Add two entities
        repository = new Repository(properties);
        repository.add(entity);
        repository.add(anotherEntity);
    });

    describe('Instantiation with one parameter', () => {
        it('Number generator works', () => {
            const repo = new Repository({name: 'string'});
            assert.equal(repo.nextId(), 0);
            assert.equal(repo.nextId(), 1);
        });

        it('Creates object', () => {
            assert.isTrue(repository instanceof Repository);
            assert.isTrue(repository.props instanceof Object);
            assert.deepEqual(repository.props, properties);
            assert.isTrue(repository.data instanceof Map);
            assert.deepEqual(repository.data.get(0), entity);
            assert.deepEqual(repository.data.get(1), anotherEntity);
        });
    });

    describe('count', () => {
        it('returns the number of stored entities', () => {
            assert.equal(repository.count, 2);
            repository.add({
                name: "Niki",
                age: 45,
                birthday: new Date(1977, 11, 24)
            });
            assert.equal(repository.count, 3);
        });
    });
    describe('add', () => {
        it('adds an entity to the data', () => {
            assert.equal(repository.count, 2);
            let newEntity = {
                name: "Niki",
                age: 45,
                birthday: new Date(1977, 11, 24)
            };
            assert.equal(repository.add(newEntity), 2);
            assert.equal(repository.count, 3);
            assert.deepEqual(repository.getId(2), newEntity);
        });

        it('If any property is missing, should throw an Error', () => {
            let newEntity = {
                //name: "Niki",
                age: 45,
                birthday: new Date(1977, 11, 24)
            };

            assert.throw(() => repository.add(newEntity), Error, 'Property name is missing from the entity!');

            newEntity = {
                name: "Niki",
                //age: 45,
                birthday: new Date(1977, 11, 24)
            };

            assert.throw(() => repository.add(newEntity), Error, 'Property age is missing from the entity!');
            newEntity = {
                name: "Niki",
                age: 45,
                //birthday: new Date(1977, 11, 24)
            };

            assert.throw(() => repository.add(newEntity), Error, 'Property birthday is missing from the entity!');
        });

        it('If the property is present, but is of incorrect type, throw a TypeError', () => {
            let newEntity = {
                name: 1,
                age: 45,
                birthday: new Date(1977, 11, 24)
            };

            assert.throw(() => repository.add(newEntity), TypeError, 'Property name is not of correct type!');
        });

        it('If the property is present, but is of incorrect type, throw a TypeError', () => {
            let newEntity = {
                name: 'Niki',
                age: '45',
                birthday: new Date(1977, 11, 24)
            };

            assert.throw(() => repository.add(newEntity), TypeError, 'Property age is not of correct type!');
        });

        it('If the property is present, but is of incorrect type, throw a TypeError', () => {
            let newEntity = {
                name: 'Niki',
                age: 45,
                birthday: 'new Date(1977, 11, 24)'
            };

            assert.throw(() => repository.add(newEntity), TypeError, 'Property birthday is not of correct type!');
        });
    });
    describe("getId", function () {
        it("gets record with correct id", function () {
            assert.deepEqual(repository.getId(0), entity);
        });

        it('throws Error if record id does not exist', () => {
            const repo = new Repository({name: "string"});
            repo.add({name: "Niki"});
            assert.throws(() => repo.getId(-1), Error, `Entity with id: -1 does not exist!`);
            assert.throws(() => repo.getId(1), Error, `Entity with id: 1 does not exist!`);
        })
    });
    describe('update', () => {
        it('test', () => {
            repository.add(entity);
            repository.add(entity);
            repository.update(1, {name: 'Kolio', age: 18, birthday: new Date(1998, 0, 7)})
            assert.deepEqual(repository.data.get(1), {name: 'Kolio', age: 18, birthday: new Date(1998, 0, 7)})
        })
        it('test', () => {
            repository.add(entity);
            repository.add(entity);
            assert.throw(() => repository.update(1, {
                name: {},
                age: 18,
                birthday: new Date(1998, 0, 7)
            }), TypeError, 'Property name is not of correct type!')
        })
        it('test', () => {
            repository.add(entity);
            assert.throw(() => repository.update(0, {
                hoi: 'Kolio',
                age: 18,
                birthday: new Date(1998, 0, 7)
            }), Error, 'Property name is missing from the entity!')
        })
        it('test', () => {
            assert.throw(() => repository.update(10, {
                name: 'Kolio',
                age: 18,
                birthday: new Date(1998, 0, 7)
            }), Error, "Entity with id: 10 does not exist!")
        })
    })
    describe('delete', () => {
        it('deletes record', () => {
            repository.add(entity);
            repository.add(entity);
            repository.add(entity);
            repository.del(2);
            assert.equal(repository.count, 4);
            assert.isFalse(repository.data.has(2));
        });

        it('If the id does not exist in the data throw an Error with message', () => {
            assert.throw(() => repository.del(3), Error, 'Entity with id: 3 does not exist!');
        });
    })
});
