const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const {writeFile, copyFile, copyManagerImg, copyEngineerImg, copyInternImg } = require('./utils/generate-site.js');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');

const engineer = new Engineer;
const intern = new Intern;
const manager = new Manager;
const employee = new Employee;

function addEngineerOrIntern(){
     return inquirer
        .prompt(
              {
                type: 'list',
                message: 'Would you like to enter an engineer or an intern?',
                name: 'action',
                choices: ['Engineer', 'Intern']
              }
        )
        .then(({action}) => {
            let choice = engineer;
            if(action==='Intern'){
                choice = intern;
            }
            
                choice.promptUser()
                    .then(function(data) {
                        choice.setValues(data.name, data.id, data.email);
                        let roleValue = choice.getRole();
                        if(choice===intern){
                            choice.setSchool(data.school);
                            employee.addEmployeeCard(
                                {
                                    role: roleValue,
                                    name: choice.name,
                                    id: choice.id,
                                    email: choice.email,
                                    school: choice.school
            
                                }
                            );
                        }else{
                            choice.setUsername(data.username);
                            employee.addEmployeeCard(
                                {
                                    role: roleValue,
                                    name: choice.name,
                                    id: choice.id,
                                    email: choice.email,
                                    username: choice.username
            
                                }
                            );
                        }
                        
                    })
                    .then(addAnotherTeammate)
                    .then(() => {
                        return generatePage(employee.getEmployeeCards());
                    })
                    .then(pageHTML => {
                        copyManagerImg();
                        copyEngineerImg();
                        copyInternImg();
                        return writeFile(pageHTML);
                    })
                    .catch(err => {
                      console.log(err);
                    });     
        });
}
function addAnotherTeammate(){
        return inquirer
            .prompt(
                {
                    type: 'confirm',
                    name: 'confirm',
                    message: 'Would you like to enter another teammate?',
                    default: false
                }
            )
            .then(({confirm}) => {
                if (confirm) {
                    addEngineerOrIntern();
                }
                else{
                    writeFile(generatePage(employee.getEmployeeCards()));
                    copyManagerImg();
                    copyEngineerImg();
                    copyInternImg();
                }
                
            });
    
}
function initializeApp(){
    manager.promptUser().then(function(data){
        manager.setValues(data.name, data.id, data.email);
        manager.setNumber(data.number);
        let roleValue = manager.getRole();
        employee.addEmployeeCard(
            {
                role: roleValue,
                name: manager.name,
                id: manager.id,
                email: manager.email,
                number: manager.number

            }
        );
        console.log(employee.getEmployeeCards());
    }).then(addAnotherTeammate);
}

initializeApp();
