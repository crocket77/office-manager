const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name,ID,email,github,role) {
    super(name,ID,email);

    this.github = github;
    this.role = role;
   
  }

  getGithub() {
    return this.github;
  }
  getRole(){
    return this.role;
  }
}

module.exports = Engineer;
