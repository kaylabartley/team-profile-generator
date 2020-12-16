const inquirer = require('inquirer');
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(){
        super();
        this.username='';
        this.engineerArr=[];
    }
    getRole(){
        return this;
    }
    getEngineerArray(){
        return this.engineerArr;
    }
    setUsername(username){
        this.username=username;
    }
    promptUser(){
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
                    validate: function (email) {

                        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                          console.log("Great job");
                            return true;
                        } else {
                            console.log(".  Please enter a valid email")
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
                self.setValues(data.name, data.id, data.email);
                self.setUsername(data.username);
                getEngineerArray().push(self.getRole());
              });
        }
}



module.exports = Engineer;