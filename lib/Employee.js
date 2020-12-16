class Employee {
    constructor(){
        this.name='';
        this.id='';
        this.email='';
    }
    setValues(name, id, email){
        this.name=name;
        this.id=id;
        this.email=email;
    }
    getName(){
        if(this.name.length){
            return this.name;
        }
        else {
            return false;
        }
    }
    getId(){
        if(this.id.length){
            return this.id;
        }
        else {
            return false;
        }
    }
    getEmail(){
        if(this.email.length){
            return this.email;
        }
        else {
            return false;
        }
    }
    getRole(){
        return this;
    }
}



module.exports = Employee;