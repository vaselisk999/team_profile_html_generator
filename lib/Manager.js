
const Employee = require("./Employee");
/**
 * Manager class gets params extends by Employee class
 * @param name of manager name
 * @param id of identificator
 * @param email of manager emaile
 * @param officeNumber of manager officeNumber
 */
class Manager extends Employee {
    constructor(name, id, email, officeNumber) { // and whatever else is necessary
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    // function returns office numbers
    getOfficeNumber(){
        return this.officeNumber;
    }

    // function returns Manager role string
    getRole(){
        return "Manager";
    }
}

module.exports = Manager;