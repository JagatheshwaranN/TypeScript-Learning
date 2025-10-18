interface Employee {
    readonly empId:number;
    empName:string;
    empDepart?:string;
    display():void;
}

let employee1:Employee = {
    empId:101,
    empName:"John",
    display() {
        console.log(`Employee Id: ${employee1.empId}, Employee Name: ${employee1.empName}`);
    }
}

let employee2:Employee = {
    empId:102,
    empName:"Nike",
    empDepart:"Accounts",
    display() {
        console.log(`Employee Id: ${employee2.empId}, Employee Name: ${employee2.empName}, Employee Depart: ${employee2.empDepart}`);
    }
}

employee1.display();
employee2.display();

interface Animal {
    name:string;
    sound():void;
}

interface Dog extends Animal {
    color:string;
}

let puppy:Dog = {
    name:"seso",
    color:"brown",
    sound() {
        console.log(`${this.name} whose color is ${this.color} and make whoof sound`);
    }
}

console.log(`Dog Name: ${puppy.name}, Dog Color: ${puppy.color}`);
puppy.sound();

class Cat implements Animal {
    name: string;   
    constructor(name:string) {
        this.name = name;
    }
    sound(): void {
        console.log(`${this.name} meow!`);
    }
    
}

let kitty = new Cat("jijo");
kitty.sound();
