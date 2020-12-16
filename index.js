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
                    .then(addAnotherTeammate)
                    .then(() => {
                        return generatePage(manager.getManagerArray(), engineer.getEngineerArray(), intern.getInternArray());
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
                    writeFile(generatePage(manager.getManagerArray(), [], []));
                    copyManagerImg();
                    copyEngineerImg();
                    copyInternImg();
                }
                
            });
    
}
function initializeApp(){
    manager.promptUser().then(addAnotherTeammate);
}

initializeApp();
