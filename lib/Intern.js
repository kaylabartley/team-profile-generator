const inquirer = require('inquirer');
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(){
        super();
        this.school='';
    }
    getRole(){
        return 'Intern';
    }
    setSchool(school){
        this.school=school;
    }
    promptUser(){
        return inquirer
            .prompt([
                {
                    type: 'input',
                    message: "Enter the name of the intern: ",
                    name: 'name',
                    validate: nameInput => {
                        if (nameInput) {
                        return true;
                        } else {
                        console.log("Please enter the intern\'s name!");
                        return false;
                        }
                    }
                },
                {
                    type: 'input',
                    message: "Enter the id of the intern: ",
                    name: 'id',
                    validate: idInput => {
                        if (idInput) {
                        return true;
                        } else {
                        console.log("Please enter the intern\'s id!");
                        return false;
                        }
                    }    
                },
                {
                    type: 'input',
                    message: "Enter the email address of the intern: ",
                    name: 'email',
                    validate: function (email) {
  
                        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                            console.log("   Great job");
                              return true;
                          } else {
                              console.log(".  Please enter a valid email")
                              return false;
                          }
                    }    
                },
                {
                    type: 'input',
                    message: "Enter the school of the intern: ",
                    name: 'school',
                    validate: schoolInput => {
                        if (schoolInput) {
                        return true;
                        } else {
                        console.log("Please enter the intern\'s school!");
                        return false;
                        }
                    }    
                }
            ]);
        }
}

module.exports = Intern;