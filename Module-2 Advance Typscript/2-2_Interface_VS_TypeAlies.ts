{

    // Interface VS Type alias

    // Primitive data type
    type rollNumber = number;
    // Interface not possible with primitive data but possible it is type alias


    // Non primitive data type

    // Type alias
    type User1 = {
        name: string;
        age: number;
    }

    // Interface
    interface User2 {
        name: string;
        age: number;
    }

    // extends with type alias with intersection
    type UserWithRole1 = User1 & { role: string };

    // extends interface
    interface UserWithRole2 extends User1 {
        role: string;
    }

    const user1: UserWithRole1 = {
        name: "Masud",
        age: 21,
        role: "Admin"
    }


    // Array

    // Type alias
    type Roll1 = number[];

    // Interface
    interface Roll2 {
        [index: number]: number;
    }

    const rollNumber1: Roll2 = [2, 544, 56, 5];


    // Function

    // Type alias
    type Add1 = (num1: number, num2: number) => number;

    // Interface
    interface Add2 {
        (num1: number, num2: number): number;
    }

    const add: Add1 = (num1, num2) => num1 + num2;
}