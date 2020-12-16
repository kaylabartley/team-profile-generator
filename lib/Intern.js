const inquirer = require('inquirer');

class Intern {
    constructor(){
        this.interns=[];
    }
    getInternArray(){
        return this.interns;
    }
    promptUser(){
        const self = this;
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
                    validate: emailInput => {
                        if (emailInput) {
                        return true;
                        } else {
                        console.log("Please enter the intern\'s email address!");
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
            ])
            .then(function(data) {
                self.interns.push(data);
              });
        }
}

module.exports = Intern;