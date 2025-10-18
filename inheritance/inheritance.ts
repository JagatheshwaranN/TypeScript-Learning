// Inheritance - The class can inherit or acquire the properties and behaviour of another class.

class Car {

    carName:string;
    carModel:string;

    constructor(carName:string, carModel:string){
        this.carName=carName;
        this.carModel=carModel;
    }

    displayCarInfo():void {
        console.log(`Car Name: ${this.carName}, Car Model: ${this.carModel}`);
    }
}

class Honda extends Car {

    carYear:number;

    constructor(carName:string, carModel:string, carYear:number) {
        super(carName, carModel);
        this.carYear = carYear;
    }

    displayCarYear():void {
        console.log(`Car Year: ${this.carYear}`);
    }

    displayCarInfo():void {
        console.log(`Car Name: ${this.carName}, Car Model: ${this.carModel}, Car Year: ${this.carYear}`);
    }
}

let honda = new Honda("Honda", "Azure", 2005);
honda.displayCarYear();
honda.displayCarInfo();

let honda2:Car = new Honda("Honda", "Desire", 2010);
honda2.displayCarInfo();
// honda2.displayCarYear(); - Can't access child class method by parent class reference.

class Parent {

    a:number = 100;

    constructor() {
      console.log("Parent Class Constructor");
    }

    show() {
        console.log("Show Method from Parent: ", this.a);
    }

}

class Child extends Parent {

    a:number = 200;

    constructor() {
        super();
      console.log("Child Class Constructor");
    }

    show() {
        super.show();
        console.log("Show Method from Child: ", this.a);
    }
}

let child = new Child();
child.show();