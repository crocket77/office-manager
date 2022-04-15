const inquirer = require('inquirer');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager')
const generatePage = require('./src/page-template.js');
const { writeFile, copyFile } = require('./utils/generate-site');
let engineerArr = [];
let internArr = [];
  


async function initManager() {
    return inquirer
    .prompt([
      {
        type: 'text',
        name: 'name',
        message: 'Who is the Manager?'
      },
      {
        type: 'text',
        name: 'managerID',
        message: 'What is the Managers ID?'
      },
      {
        type: 'text',
        name: 'managerEmail',
        message: 'What is the Managers email?'
      },
      {
        type: 'text',
        name: 'officeNumber',
        message: 'What is the Office Id?'
      }
    ]).then(mData=>{
         return new Manager(mData.name, mData.managerID, mData.managerEmail, mData.officeNumber,"Manager");
    })
}



async function menuChoice(){
    return inquirer
    .prompt({
      type: 'list',
      name: 'choice',
      message: 'What would you like to do?',
      choices: ["Add an engineer", "Add an intern", "Finish Team"]
    }).then(data=>{;
      if (data.choice === "Add an engineer") {
        return inquirer
        .prompt([
          {
            type: 'text',
            name: 'name',
            message: "What is the engineers's name?",
          },
          {
            type: 'text',
            name: 'id',
            message: "What is the engineers's id?"
          },
          {
            type: 'text',
            name: 'email',
            message: "What is the engineers's email?"
          },
          {
            type: 'text',
            name: 'github',
            message: "What is the engineers's github?"
          }
        ]).then(data=>{engineerArr.push(new Engineer(data.name, data.id, data.email, data.github,'Engineer'));})
        .then(()=>{
           console.log(engineerArr)
           return menuChoice();
      })
        
        
      }else if (data.choice === "Add an intern") {
        return inquirer
        .prompt([
          {
            type: 'text',
            name: 'name',
            message: "What is the intern's name?",
          },
          {
            type: 'text',
            name: 'id',
            message: "What is the intern's id?"
          },
          {
            type: 'text',
            name: 'email',
            message: "What is the intern's email?"
          },
          {
            type: 'text',
            name: 'school',
            message: "What school did the intern go to?"
          }
        ]).then(data=>{
             internArr.push(new Intern(data.name, data.id, data.email, data.school,'Intern'));
        }).then(()=>{
              console.log(internArr)
              return menuChoice();
        })
        
      }
      else {
        return;
      }
  }) 
}




initManager()
  .then(manager=>{
    menuChoice()
     .then(()=>{
      copyFile();
      writeFile(generatePage(manager,engineerArr,internArr))
  })
})

  




