// Basic Data Type

// String
let firstName: string = "Masud";

// Number
let roll: number = 602770;

// Boolean
let isAdmin: boolean = true;

// Undefined
let x: undefined = undefined;

// Null
let y: null = null;


// Array
let friends: string[] = ['Masud', 'rana', 'shaykot'];

let eligibleRollList: number[] = [23, 435, 45, 564];
eligibleRollList[0] = 23; //override
eligibleRollList.push(454); //push the number in eligibleRollList
console.log(eligibleRollList);

// tuple --> array --> order --> type of values

let coordinates: [number, number] = [34, 34];

let ageName: [number, string, boolean] = [34, 'masud', true];
ageName[0] = 45;