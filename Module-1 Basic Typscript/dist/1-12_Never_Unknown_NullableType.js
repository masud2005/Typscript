"use strict";
{
    // nullable types
    const searchName = (value) => {
        if (value) {
            console.log("Searching");
        }
        else {
            console.log("There is nothing to search");
        }
    };
    searchName(null);
    // Unknown types
    const getSpeedInMeterPerSecond = (value) => {
        if (typeof value === "number") {
            const convertedSpeed = (value * 1000) / 3600;
            console.log(`The speed is ${convertedSpeed} ms^-1`);
        }
        else if (typeof value === 'string') {
            const [result, unit] = value.split(' ');
            console.log(result);
            const convertedSpeed = (parseFloat(value) * 1000) / 3600;
            console.log(`The speed is ${convertedSpeed} ms^-1`);
        }
        else {
            console.log("Wrong input!");
        }
    };
    getSpeedInMeterPerSecond('1000 ms^-1');
}
