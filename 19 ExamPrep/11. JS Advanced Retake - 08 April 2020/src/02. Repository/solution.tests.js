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

    beforeEach(() => {// Initialize props object
        let properties = {
            name: "string",
            age: "number",
            birthday: "object"
        };
//Initialize the repository
        repository = new Repository(properties);
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
            repository.add(newEntity);
            assert.equal(repository.count, 3);
            assert.deepEqual(repository.getId(2), newEntity);
        });

        it('If any property is missing, should throw an Error', () => {
            let newEntity = {
                //name: "Niki",
                age: 45,
                birthday: new Date(1977, 11, 24)
            };

            assert.throw(() => repository.add(newEntity), 'Property name is missing from the entity!');

            newEntity = {
                name: "Niki",
                //age: 45,
                birthday: new Date(1977, 11, 24)
            };

            assert.throw(() => repository.add(newEntity), 'Property age is missing from the entity!');
            newEntity = {
                name: "Niki",
                age: 45,
                //birthday: new Date(1977, 11, 24)
            };

            assert.throw(() => repository.add(newEntity), 'Property birthday is missing from the entity!');
        });

        it('If the property is present, but is of incorrect type, throw a TypeError', () => {
            let newEntity = {
                name: 1,
                age: 45,
                birthday: new Date(1977, 11, 24)
            };

            assert.throw(() => repository.add(newEntity), 'Property name is not of correct type!');
        });

        it('If the property is present, but is of incorrect type, throw a TypeError', () => {
            let newEntity = {
                name: 'Niki',
                age: '45',
                birthday: new Date(1977, 11, 24)
            };

            assert.throw(() => repository.add(newEntity), 'Property age is not of correct type!');
        });

        it('If the property is present, but is of incorrect type, throw a TypeError', () => {
            let newEntity = {
                name: 'Niki',
                age: 45,
                birthday: 'new Date(1977, 11, 24)'
            };

            assert.throw(() => repository.add(newEntity), 'Property birthday is not of correct type!');
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
        it('updates record', () => {
            entity.name = 'Stamat';
            repository.update(0, entity);
            assert.deepEqual(repository.getId(0), entity);
        });

        it('If the id does not exist in the data throw an Error with message', () => {
            assert.throw(() => repository.update(3, anotherEntity), Error, 'Entity with id: 3 does not exist!');
        });

        it('If any property is missing, should throw an Error', () => {
            let newEntity = {
                //name: "Niki",
                age: 45,
                birthday: new Date(1977, 11, 24)
            };

            assert.throw(() => repository.update(0, newEntity), 'Property name is missing from the entity!');

            newEntity = {
                name: "Niki",
                //age: 45,
                birthday: new Date(1977, 11, 24)
            };

            assert.throw(() => repository.update(0,newEntity), 'Property age is missing from the entity!');
            newEntity = {
                name: "Niki",
                age: 45,
                //birthday: new Date(1977, 11, 24)
            };

            assert.throw(() => repository.update(0,newEntity), 'Property birthday is missing from the entity!');
        });

        it('If the property is present, but is of incorrect type, throw a TypeError', () => {
            let newEntity = {
                name: 1,
                age: 45,
                birthday: new Date(1977, 11, 24)
            };

            assert.throw(() => repository.update(0,newEntity), 'Property name is not of correct type!');
        });

        it('If the property is present, but is of incorrect type, throw a TypeError', () => {
            let newEntity = {
                name: 'Niki',
                age: '45',
                birthday: new Date(1977, 11, 24)
            };

            assert.throw(() => repository.update(0,newEntity), 'Property age is not of correct type!');
        });

        it('If the property is present, but is of incorrect type, throw a TypeError', () => {
            let newEntity = {
                name: 'Niki',
                age: 45,
                birthday: 'new Date(1977, 11, 24)'
            };

            assert.throw(() => repository.update(0,newEntity), 'Property birthday is not of correct type!');
        });
    })

    describe('delete', () => {
        it('deletes record', () => {
            repository.del(0);
            assert.equal(repository.count, 1);
            assert.isFalse(repository.data.has(0));
        });

        it('If the id does not exist in the data throw an Error with message', () => {
            assert.throw(() => repository.del(3, anotherEntity), Error, 'Entity with id: 3 does not exist!');
        });
    })
});
