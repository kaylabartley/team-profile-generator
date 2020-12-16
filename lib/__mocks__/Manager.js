const inquirer = require('inquirer');
const Employee = require('../Employee');

class Managers extends Employee {
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
        const data = {
            name: 'Kayla',
            id: '1234',
            email: 'susie@gmail.com'
        }
        this.setValues(data.name, data.id, data.email);
        this.getManagerArray().push(this.getRole());
        
        }
}

module.exports = Managers;