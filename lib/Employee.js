class Employee {
    constructor(){
        this.name='';
        this.id='';
        this.email='';
        this.employeeCards = [];
    }
    addEmployeeCard(data){
        this.employeeCards.push(data);
    }
    getEmployeeCards(){
        return this.employeeCards;
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
        return 'Employee';
    }
}



module.exports = Employee;