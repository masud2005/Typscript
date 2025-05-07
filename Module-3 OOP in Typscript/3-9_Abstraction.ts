{
    // abstraction  : 1. interface 2. abstract

    // Interface
    // Idea
    interface Vehicle1 {
        startEngine(): void;
        stopEngine(): void;
        move(): void;
    }

    // Real implementation
    class Car1 implements Vehicle1 {
        startEngine(): void {
            console.log("I am starting the car engine.");
        }
        stopEngine(): void {
            console.log("I am stopping the car engine.");
        }
        move(): void {
            console.log("I am moving the car.");
        }
        test() {
            console.log("I am just testing.");
        }
    }

    const toyotaCar = new Car1();
    toyotaCar.startEngine();


    // Abstract
    // Idea
    abstract class Vehicle2 {
        abstract startEngine(): void;
        abstract stopEngine(): void;
        abstract move(): void;
        test() {
            console.log("I am just testing.");
        }
    }

    // Real implementation
    class Car2 extends Vehicle2 {
        startEngine(): void {
            console.log("I am starting the car  engine");
        }
        stopEngine(): void {
            console.log("I am stopping the car engine");
        }
        move(): void {
            console.log("I am moving  the car");
        }
    }

    const toyotaCar2 = new Car2();
    toyotaCar2.stopEngine();
}