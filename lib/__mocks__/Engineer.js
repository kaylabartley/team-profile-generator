const inquirer = require('inquirer');
const Employee = require('../Employee');

class Engineers extends Employee {
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
        const data = {
            name: 'Kayla',
            id: '1234',
            email: 'susie@gmail.com'
        };
        this.setValues(data.name, data.id, data.email);
        this.getEngineerArray().push(this.getRole());
    }
}

module.exports = Engineers;



module.exports = Engineers;