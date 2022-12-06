const Manager= require('../lib/Manager');

describe('Manager class', () => {
    it('creates a manager object,', () => {
        const manager = new Manager('Carrie','1234','carrie@email.com','9')

        expect(manager.name).toBe('Carrie');
        expect(manager.id).toBe('1234');
        expect(manager.email).toBe('carrie@email.com');
    });
});

describe('getRole', () => {
    it('gets the role from getRole method', () => {
        const manager = new Manager('Carrie','1234','carrie@email.com','9')
        expect(manager.getRole()).toBe('Manager');
    });
});