// Extends employee class
const Employee = require("./employee");

// In addition to Employee's properties and methods, Engineer will also have the following:
// github—GitHub username
// getGithub()
// getRole()—overridden to return 'Engineer'
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  getGithub() {
    console.log(`This Engineer's github username is ${this.github}.`);
  }

  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;