const Engineer = require('../lib/Engineer');

describe('Engineer class', () => {
    it('creates an engineer object,', () => {
        const engineer = new Engineer('Carrie','1234','carrie@email.com','Cgithub')

        expect(engineer.name).toBe('Carrie');
        expect(engineer.id).toBe('1234');
        expect(engineer.email).toBe('carrie@email.com');
        expect(engineer.github).toBe('Cgithub');
    });
})

describe('getGitHub', () => {
    it('gets the name from getGitHub method', () => {
        const engineer = new Engineer('Carrie','1234','carrie@email.com');
        expect(engineer.getGitHub()).toBe('Cgithub');
    });
});

describe('getRole', () => {
    it('gets the role from getRole method', () => {
        const engineer = new Engineer('Carrie','1234','carrie@email.com');
        expect(engineer.getRole()).toBe('Engineer');
    });
});