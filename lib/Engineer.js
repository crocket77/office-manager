const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name,ID,email,role, github) {
    super(name,ID,email,role);

    this.github = github;
   
  }

  getGithubURL() {
    return `https://github.com/${this.github}`;
  }
}

module.exports = Engineer;
