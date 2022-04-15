const Employee = require('./Employee');

class Intern extends Employee {
  constructor(name,ID,email,school,role) {
    super(name,ID,email);

    this.school = school;
    this.role =role;
   
  }

  getSchool() {
    return this.school;
  }

  getRole(){
    return this.role;
  }
}

module.exports = Intern;