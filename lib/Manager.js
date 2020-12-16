const inquirer = require('inquirer');

class Manager {
    constructor(){
        this.manager=[];
    }
    getManagerArray(){
        if(this.manager.length){
            return this.manager;
        }
        else return false;
    }
    promptUser(){
        const self = this;
        return inquirer
            .prompt([
                {
                    type: 'input',
                    message: "Enter the name of the project manager: ",
                    name: 'name',
                    validate: nameInput => {
                        if (nameInput) {
                        return true;
                        } else {
                        console.log("Please enter the project manager\'s name!");
                        return false;
                        }
                    }
                },
                {
                    type: 'input',
                    message: "Enter the id of the project manager: ",
                    name: 'id',
                    validate: idInput => {
                        if (idInput) {
                        return true;
                        } else {
                        console.log("Please enter the project manager\'s id!");
                        return false;
                        }
                    }    
                },
                {
                    type: 'input',
                    message: "Enter the email address of the project manager: ",
                    name: 'email',
                    validate: emailInput => {
                        if (emailInput) {
                        return true;
                        } else {
                        console.log("Please enter the project manager\'s email address!");
                        return false;
                        }
                    }    
                },
                {
                    type: 'input',
                    message: "Enter the office number of the project manager: ",
                    name: 'number',
                    validate: numberInput => {
                        if (numberInput) {
                        return true;
                        } else {
                        console.log("Please enter the project manager\'s office number!");
                        return false;
                        }
                    }    
                }
            ])
            .then(function(data) {
                self.manager.push(data);
            });
        }
}

module.exports = Manager;