
const Employee = require("./Employee");

/**
 * Intern class gets params extends by Employee class
 * @param name of Intern name
 * @param id of identificator
 * @param email of Intern email
 * @param school of Intern school
 */
class Intern  extends Employee {
    constructor(name, id, email, school) { // and whatever else is necessary
        super(name, id, email);
        this.school = school;
    }
    // function returns Intern school
    getSchool(){
        return this.school;
    }
    // function returns Intern role string
    getRole(){
        return "Intern";
    }
}

module.exports = Intern ;
