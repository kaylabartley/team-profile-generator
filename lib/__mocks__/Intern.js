const inquirer = require('inquirer');
const Employee = require('../Employee');

class Interns extends Employee {
    constructor(){
        super();
        this.school='';
        this.internArr=[];
    }
    getRole(){
        return this;
    }
    getInternArray(){
        return this.internArr;
    }
    setSchool(school){
        this.school=school;
    }
    promptUser(){
        const data = {
            name: 'Kayla',
            id: '1234',
            email: 'susie@gmail.com'
        };
        this.setValues(data.name, data.id, data.email);
        this.getInternArray().push(this.getRole());
    }
}

module.exports = Interns;
