const inquirer = require('inquirer');

class Managers {
    constructor(){
        this.manager=[];
    }
    promptUser(){
        this.manager.push(new Object);
    }
    getManagerArray(){
        if(this.manager.length){
            return this.manager;
        }
        else {
            return false;
        }
    }
}



module.exports = Managers;