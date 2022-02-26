const Employee = require('./Employee');

class Intern extends Employee {
  constructor(name,ID,email,role, school) {
    super(name,ID,email,role);

    this.school = school;
   
  }

  getInternSchool() {
    return `The intern went to ${this.school}`;
  }
}

module.exports = Intern;