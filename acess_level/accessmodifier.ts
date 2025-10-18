// The access levels in Typescript. Private, Protected  and Public.

class Person {

    public personName:string;
    protected personEmail: string;
    private personAge: number;

    constructor(personName, personEmail, personAge) {
        this.personName = personName;
        this.personEmail = personEmail;
        this.personAge = personAge;
    }

    public displayInfo() {
        console.log(`Person Name: ${this.personName}, Person Email: ${this.personEmail}, Person Age: ${this.personAge}`);
    }
}

class Employee extends Person {
 
    private empId:number;

    constructor(personName, personEmail, personAge, empId) {
       super(personName, personEmail, personAge);
       this.empId = empId;
    }

    public displayInfo() {
        console.log(`Person Name: ${this.personName}, Person Email: ${this.personEmail}, Emp Id: ${this.empId}`);
    }

}

let emp1 = new Employee("John", "john@test.com", 25, 12345);
emp1.displayInfo();

let person = new Person("John", "john@test.com", 25);
person.displayInfo();
