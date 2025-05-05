"use strict";
var _a, _b;
{
    const age = 18;
    // Normal way
    if (age >= 18) {
        console.log("adult");
    }
    else {
        console.log("not adult");
    }
    // Ternary Operator
    const isAdult = age >= 18 ? "Adult" : "Not Adult";
    console.log(isAdult);
    // Nullish coalescing operator
    // null / undefined --> decision making
    // const isAuthenticated = null;
    const isAuthenticated = '';
    const result1 = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : "Guest";
    const result2 = isAuthenticated ? isAuthenticated : "Guest";
    console.log({ result1, result2 });
    const user = {
        name: "Masud",
        address: {
            city: "Rangpur",
            road: "Pirgang 324",
            presentAddress: 'Dubur pukurBazar',
            permanentAddress: 'Dubur pukurBazar'
        }
    };
    const permanentAddress = (_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.permanentAddress) !== null && _b !== void 0 ? _b : "No Permanent Address";
    console.log(permanentAddress);
}
