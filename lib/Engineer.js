const inquirer = require('inquirer');

class Engineer {
    constructor(){
        this.engineers=[];
    }
    getEngineerArray(){
        return this.engineers;
    }
    promptUSer(){
        const self = this;
        return inquirer
            .prompt([
                {
                    type: 'input',
                    message: "Enter the name of the engineer: ",
                    name: 'name',
                    validate: nameInput => {
                        if (nameInput) {
                        return true;
                        } else {
                        console.log("Please enter the engineer\'s name!");
                        return false;
                        }
                    }
                },
                {
                    type: 'input',
                    message: "Enter the id of the engineer: ",
                    name: 'id',
                    validate: idInput => {
                        if (idInput) {
                        return true;
                        } else {
                        console.log("Please enter the engineer\'s id!");
                        return false;
                        }
                    }    
                },
                {
                    type: 'input',
                    message: "Enter the email address of the engineer: ",
                    name: 'email',
                    validate: emailInput => {
                        if (emailInput) {
                        return true;
                        } else {
                        console.log("Please enter the engineer\'s email address!");
                        return false;
                        }
                    }    
                },
                {
                    type: 'input',
                    message: "Enter the GitHub username of the engineer: ",
                    name: 'username',
                    validate: usernameInput => {
                        if (usernameInput) {
                        return true;
                        } else {
                        console.log("Please enter the engineer\'s GitHub username!");
                        return false;
                        }
                    }    
                }
            ])
            .then(function(data) {
                self.engineers.push(data);
              });
        }
}



module.exports = Engineer;