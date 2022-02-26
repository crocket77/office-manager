const inquirer = require('inquirer');
const Intern = require('../lib/Intern');
const Engineer = require('../lib/Engineer');
const Employee = require('../lib/Employee.js');
const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generate-site');

  
class Office {
  constructor() {
    this.manager;
    this.mEmail;
    this.mId;
    this.isEngineers;
    this.isInterns;
    this.officeID
    this.numEmployees=1;
    this.employeeArr = [];

  }

initializeOffice() {

    let mName, mId, mEmail,officeID;
    inquirer
      .prompt({
        type: 'text',
        name: 'name',
        message: 'Who is the Manager?'
      })
      .then(({ name }) => {
        mName = name;
        inquirer
        .prompt({
            type: 'text',
            name: 'managerID',
            message: 'What is the Managers ID?'
        })
        .then(({ managerID }) => {
            mId = managerID;
            console.log(`managerID ${mId}`)
            
            inquirer
            .prompt({
            type: 'text',
            name: 'managerEmail',
            message: 'What is the Managers email?'
            })
            .then(({ managerEmail }) => {
            mEmail = managerEmail;
            console.log(`managerEmail ${mEmail}`)
            
            inquirer
            .prompt({
            type: 'text',
            name: 'officeNumber',
            message: 'What is the Office Id?'
            })
            .then(({ officeNumber }) => {
            officeID = officeNumber;
            console.log(`office ID ${officeID}`)
            this.manager= new Employee(mName,mId, mEmail,'manager')
            this.employeeArr.push(this.manager)
            console.log(`manager object ${this.manager.role}`)

            this.menuChoice();
            

    }); }); }); }); 
}
menuChoice(){
    inquirer
    .prompt({
    type: 'list',
    name: 'choice',
    message: 'What would you like to do?',
    choices: ["Add an engineer", "Add an intern", "Finish Team"]
    })
    .then(({ choice }) => {
    if(choice==="Add an engineer"){
        console.log('engineer chosen')
        this.addEngineer("engineer");
    }
    else if(choice==="Add an intern"){
        this.addIntern("intern");
    }
    else{
        this.generateReport();
        for(let i=0; i<this.employeeArr.length;i++){
            console.log(this.employeeArr[i].name)
        }
    } 
    })
}


  addEngineer(empRole) {
        
        inquirer
        .prompt({
        type: 'text',
        name: 'eName',
        message: 'What is the engineers name?'
        })
        .then(({ eName }) => {
            console.log(`engineer name: ${eName}`)
            
            inquirer
            .prompt({
                type: 'text',
                name: 'eID',
                message: 'What is the engineers employee ID?'
                })
                .then(({ eID }) => {
                    console.log(`engineer id: ${eID}`)
                    
                    inquirer
                    .prompt({
                        type: 'text',
                        name: 'eEmail',
                        message: 'What is the engineers email?'
                        })
                        .then(({ eEmail }) => {
                            console.log(`engineer email: ${eEmail}`)
                           
                            inquirer
                            .prompt({
                                type: 'text',
                                name: 'github',
                                message: 'What is the engineers github account?'
                                })
                                .then(({ github}) => {
                                    console.log(`engineer name: ${eEmail}`)
                                    const engineer = new Engineer(eName, eID, eEmail,empRole,github)
                                    this.employeeArr.push(engineer)

                                    this.menuChoice();
        });});});});
   
    }

    addIntern(impRole) {
        let iName, iID, iEmail, school;
        inquirer
        .prompt({
        type: 'text',
        name: 'iName',
        message: 'What is the interns name?'
        })
        .then(({ iName }) => {
            console.log(`interns name: ${iName}`)
            
            inquirer
            .prompt({
                type: 'text',
                name: 'iID',
                message: 'What is the interns employee ID?'
                })
                .then(({ iID }) => {
                    console.log(`intern id: ${iID}`)
                    
                    inquirer
                    .prompt({
                        type: 'text',
                        name: 'iEmail',
                        message: 'What is the interns email?'
                        })
                        .then(({ iEmail }) => {
                            console.log(`intern email: ${iEmail}`)
                           
                            inquirer
                            .prompt({
                                type: 'text',
                                name: 'school',
                                message: 'What is the interns school?'
                                })
                                .then(({ github}) => {
                                    console.log(`intern school: ${school}`)
                                    const intern = new Intern(iName, iID, iEmail,impRole,school)
                                    this.employeeArr.push(intern)

                                    this.menuChoice();
        });});});});
   
    }

    generateReport(){
        console.log("figure out how to generate html report")
        generatePage(this.employeeArr);
        
    }

}
  



module.exports = Office;
