// Class with Readonly, Optional and Static Properties & Methods

class Student {

    readonly studentId:number; // Readonly property
    studentName:string;
    studentEmail?:string; // Optional property
    static studentSchool:string;

    constructor(studentId:number, studentName:string, studentEmail?:string) {
        this.studentId = studentId;
        this.studentName = studentName;
        this.studentEmail = studentEmail;
    }

    displayInfo():void {
        console.log("Student Id", this.studentId);
        console.log("Student Name", this.studentName);
        if(this.studentEmail) {
        console.log("Student Email", this.studentId);
        }
        console.log("Student School", Student.studentSchool);
    }

    static updateSchoolName(newStudentSchool:string):void {
        Student.studentSchool = newStudentSchool;
    }

}

let student1 = new Student(101, "John", "john@test.com");
let student2 = new Student(102, "Alex");

student1.displayInfo();
student2.displayInfo();

Student.updateSchoolName("Midwest High School");
student1.displayInfo();
student2.displayInfo();

// Method overloading & Constructor overloading

class Calculator {

    constructor();

    constructor(a:number, b:number);

    constructor(a?:number, b?:number) {
        if(a!== undefined && b!== undefined) {
            console.log("Sum of a & b: ", (a+b));
        }else{
            console.log("Default Constructor");
        }
    }

    add(a:number, b:number, c?:number):void;
    add(a:number, b:number, c:number):void;
    add(a:number, b:number, c:number):void {
        if(c!== undefined) {
            console.log("Sum of a, b & c: ", (a+b+c));
        }else {
            console.log("Sum of a, b : ", (a+b));
        }
    }

}

let calc1 = new Calculator();
let calc2 = new Calculator(10, 20);

calc1.add(5, 5);
calc2.add(1, 5, 10);