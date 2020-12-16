const inquirer = require('inquirer');
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(){
        super();
        this.number='';
        this.managerArr=[];
    }
    getRole(){
        return this;
    }
    getManagerArray(){
        return this.managerArr;
    }
    setNumber(number){
        this.number=number;
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
                    validate: function (email) {
  
                        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                            console.log("Great job");
                              return true;
                          } else {
                              console.log(".  Please enter a valid email!")
                              return false;
                          }
                    }
                },
                {
                    type: 'input',
                    message: "Enter the office number of the project manager: ",
                    name: 'number',
                    validate: (inputtxt) => {
                        if(inputtxt.match(/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g)){
                            return true;
                            }
                        else{
                            console.log("Please enter a valid phone number!");
                            return false;
                        }
                    }    
                }
            ])
            .then(function(data) {
                self.setValues(data.name, data.id, data.email);
                self.setNumber(data.number);
                getManagerArray().push(self.getRole());
            });
        }
}

module.exports = Manager;