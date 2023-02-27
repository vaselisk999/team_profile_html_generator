const Employee = require("./Employee");
/**
 * Engineer class gets params extends by Employee class
 * @param name of Engineer name
 * @param id of identificator
 * @param email of Engineer email
 * @param github of Engineer github
 */
class Engineer extends Employee {
    constructor(name, id, email, github) { // and whatever else is necessary
        super(name, id, email);
        this.github = github;
    }

    // function returns Engineer github
    getGithub(){
        return this.github;
    }

    // function returns Engineer role
    getRole(){
        return "Engineer";
    }
}

module.exports = Engineer;