class Employee {
    constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
}

    getName() {
        console.log(`This is Employee ${this.name}`);
        return this;
    };
    
    getId() {
        console.log(`This is Employee ${this.id}`);
        return this;
    };
    
    getEmail() {
        console.log(`This is Employee ${this.email}`);
        return this;
    };

    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;

