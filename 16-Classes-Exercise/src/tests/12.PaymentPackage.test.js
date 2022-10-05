const {assert} = require('chai');
const {PaymentPackage} = require('../PaymentPackage');

describe('PaymentPackage test suit', () => {
    describe('constructor', () => {
        it('Can be instantiated with two parameters', () => {
            let obj = new PaymentPackage('Niki', 100);
            assert.isTrue(obj instanceof PaymentPackage);
            assert.equal(obj.name, 'Niki');
            assert.equal(obj.value, 100);
            assert.equal(obj.VAT, 20);
            assert.isTrue(obj.active);
        });

        it('Instantiated with empty name throws exception', () => {
            assert.throw(() => new PaymentPackage(null, 100), Error, 'Name must be a non-empty string');
            assert.throw(() => new PaymentPackage(undefined, 100), Error, 'Name must be a non-empty string');
            assert.throw(() => new PaymentPackage('', 100), Error, 'Name must be a non-empty string');
        });

        it('Instantiated with negative value throws exception', () => {
            assert.throw(() => new PaymentPackage('Test', -100), Error, 'Value must be a non-negative number');
        });

        it('Instantiated with non-number value throws exception', () => {
            assert.throw(() => new PaymentPackage('Test', '-100'), Error, 'Value must be a non-negative number');
        });
    });

    describe('value', ()=>{
        it('Set positive value sets the value', () => {
            let paymentPackage = new PaymentPackage('Test', 100);
            paymentPackage.value = 42;
            assert.equal(paymentPackage.value, 42);
            paymentPackage.value = 0;
            assert.equal(paymentPackage.value, 0);
        });

        it('Set negative value throws exception', () => {
            let paymentPackage = new PaymentPackage('Test', 100);
            assert.throws(() => paymentPackage.value = -42, Error, 'Value must be a non-negative number');
        });

        it('Set value not number throws exception', () => {
            let paymentPackage = new PaymentPackage('Test', 100);
            assert.throws(() => paymentPackage.value = 'test', Error, 'Value must be a non-negative number');
        });
    });

    describe('name', ()=>{
        it('Set non empty string value sets the name', () => {
            let paymentPackage = new PaymentPackage('Test', 100);
            paymentPackage.name = 'The answer is 42!';
            assert.equal(paymentPackage.name, 'The answer is 42!');
        });

        it('Set empty string throws exception', () => {
            let paymentPackage = new PaymentPackage('Test', 100);
            assert.throws(() => paymentPackage.name = '', Error, 'Name must be a non-empty string');
        });

        it('Set non-string throws exception', () => {
            let paymentPackage = new PaymentPackage('Test', 100);
            assert.throws(() => paymentPackage.name = 42, Error, 'Name must be a non-empty string');
            assert.throws(() => paymentPackage.name = null, Error, 'Name must be a non-empty string');
            assert.throws(() => paymentPackage.name = undefined, Error, 'Name must be a non-empty string');
        });
    });

    describe('VAT', () => {
        it('Set positive value sets the value', () => {
            let paymentPackage = new PaymentPackage('Test', 100);
            paymentPackage.VAT = 42;
            assert.equal(paymentPackage.VAT, 42);
        });

        it('Set negative value throws exception', () => {
            let paymentPackage = new PaymentPackage('Test', 100);
            assert.throws(() => paymentPackage.VAT = -42, Error, 'VAT must be a non-negative number');
        });

        it('Set value not number throws exception', () => {
            let paymentPackage = new PaymentPackage('Test', 100);
            assert.throws(() => paymentPackage.VAT = 'test', Error, 'VAT must be a non-negative number');
        });
    });

    describe('active', () => {
        it('Set active to boolean sets active', () => {
            let paymentPackage = new PaymentPackage('Test', 100);
            paymentPackage.active = false;
            assert.isFalse(paymentPackage.active);
        });

        it('Set active not boolean throws exception', () => {
            let paymentPackage = new PaymentPackage('Test', 100);
            assert.throws(() => paymentPackage.active = 'test', Error, 'Active status must be a boolean');
        });
    });

    describe('toString', () => {
        it('toString works correct', () => {
            const paymentPackage = new PaymentPackage('HR Services', 1500);
            assert.equal(paymentPackage.toString(),
                'Package: HR Services\n' +
                '- Value (excl. VAT): 1500\n' +
                '- Value (VAT 20%): 1800');
        });

        it('toString works correct if inactive', () => {
            const paymentPackage = new PaymentPackage('HR Services', 1500);
            paymentPackage.active = false
            assert.equal(paymentPackage.toString(),
                'Package: HR Services (inactive)\n' +
                '- Value (excl. VAT): 1500\n' +
                '- Value (VAT 20%): 1800');
        });
    });
});
