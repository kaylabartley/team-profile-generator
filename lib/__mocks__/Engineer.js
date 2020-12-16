const inquirer = require('inquirer');

class Engineers {
    constructor(){
        this.engineers=[];
    }
    promptUser(){
        this.engineers.push(new Object);
    }
    getEngineerArray(){
        if(this.engineers.length){
            return this.engineers;
        }
        else {
            return false;
        }
    }
}



module.exports = Engineers;