const Intern = require('../lib/Intern');

describe('Intern class', () => {
    it('creates an intern object,', () => {
        const intern = new Intern('Carrie','1234','carrie@email.com','Univ of Washington')

        expect(intern.name).toBe('Carrie');
        expect(intern.id).toBe('1234');
        expect(intern.email).toBe('carrie@email.com');
        expect(intern.school).toBe('Univ of Washington');
    });
})

describe('getSchool', () => {
    it('gets the school from getSchool method', () => {
        const intern = new Intern('Carrie','1234','carrie@email.com','Univ of Washington');
        expect(intern.getSchool()).toBe('Univ of Washington');
    });
});

describe('getRole', () => {
    it('gets the role from getRole method', () => {
        const intern = new Intern('Carrie','1234','carrie@email.com','Univ of Washington');
        expect(intern.getRole()).toBe('Intern');
    });
});