/**
 * Employee class
 * @param name Employee name
 * @param id Employee identificator
 * @param email Employee email
 */
class Employee {
    constructor(name, id, email) { // or whatever parameters are required
        this.name = name;
        this.id = id;
        this.email = email;
    }
    // function returns Employee name
    getName (){
        return this.name;
    }
    // function returns Employee id
    getId (){
        return this.id;
    }
    // function returns Employee email
    getEmail (){
        return this.email;
    }
    // function returns Employee role
    getRole (){
        return "Employee";
    }
}

module.exports = Employee;