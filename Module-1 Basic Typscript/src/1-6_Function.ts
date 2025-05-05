
// Normal Function
// Array Function

// Normal function
function add(num1: number, num2: number): number {
    return num1 + num2;
}

add(23, 34);

// Default value set
function dif(num1: number, num2: number = 10): number {
    return num1 - num2;
}

dif(23, 34);

// Arrow function
const addArrow = (num1: number, num2: number = 0): number => num1 + num2;

addArrow(23);

// Object --> function --> Method

const poorUser = {
    name: "masud",
    balance: 0,
    addBalance(balance: number): string {
        return `My new balance is ${this.balance + balance}`;
    }
}


const arr: number[] = [3, 3, 4, 6];
const newArray: number[] = arr.map((element: number): number => element * element);