const inquirer = require('inquirer');

class Interns {
    constructor(){
        this.interns=[];
    }
    promptUser(){
        this.interns.push(new Object);
    }
    getInternArray(){
        if(this.interns.length){
            return this.interns;
        }
        else {
            return false;
        }
    }
}



module.exports = Interns;