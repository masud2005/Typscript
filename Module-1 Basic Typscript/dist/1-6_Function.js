"use strict";
// Normal Function
// Array Function
// Normal function
function add(num1, num2) {
    return num1 + num2;
}
add(23, 34);
// Default value set
function dif(num1, num2 = 10) {
    return num1 - num2;
}
dif(23, 34);
// Arrow function
const addArrow = (num1, num2 = 0) => num1 + num2;
addArrow(23);
// Object --> function --> Method
const poorUser = {
    name: "masud",
    balance: 0,
    addBalance(balance) {
        return `My new balance is ${this.balance + balance}`;
    }
};
const arr = [3, 3, 4, 6];
const newArray = arr.map((element) => element * element);
