const Employee = require('../lib/Employee');

describe('Empolyee class', () => {
    it('creates an employee object,', () => {
        const employee = new Employee('Carrie','1234','carrie@email.com')

        expect(employee.name).toBe('Carrie');
        expect(employee.id).toBe('1234');
        expect(employee.email).toBe('carrie@email.com');
    });
});

describe('getName', () => {
    it('gets the name from getName method', () => {
        const employee = new Employee('Carrie','1234','carrie@email.com');
        expect(employee.getName()).toBe('Carrie');
    });
});

describe('getId', () => {
    it('gets the id from getId method', () => {
        const employee = new Employee('Carrie','1234','carrie@email.com');
        expect(employee.getId()).toBe('1234');
    });
});

describe('getEmail', () => {
    it('gets the email from getEmail method', () => {
        const employee = new Employee('Carrie','1234','carrie@email.com');
        expect(employee.getEmail()).toBe('carrie@email.com');
    });
});

describe('getRole', () => {
    it('gets the role from getRole method', () => {
        const employee = new Employee('Carrie','1234','carrie@email.com');
        expect(employee.getRole()).toBe('Employee');
    });
});
