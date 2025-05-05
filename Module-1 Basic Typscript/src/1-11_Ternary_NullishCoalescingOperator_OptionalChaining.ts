{
    const age: number = 18;

    // Normal way
    if (age >= 18) {
        console.log("adult");
    } else {
        console.log("not adult");
    }

    // Ternary Operator
    const isAdult = age >= 18 ? "Adult" : "Not Adult";
    console.log(isAdult);


    // Nullish coalescing operator
    // null / undefined --> decision making

    // const isAuthenticated = null;
    const isAuthenticated = '';
    const result1 = isAuthenticated ?? "Guest";
    const result2 = isAuthenticated ? isAuthenticated : "Guest";
    console.log({ result1, result2 });

    // Type alias
    type User = {
        name: string;
        address: {
            city: string;
            road: string;
            presentAddress: string;
            permanentAddress: string;
        };
    }

    const user: User = {
        name: "Masud",
        address: {
            city: "Rangpur",
            road: "Pirgang 324",
            presentAddress: 'Dubur pukurBazar',
            permanentAddress: 'Dubur pukurBazar'
        }
    }

    const permanentAddress = user?.address?.permanentAddress ?? "No Permanent Address";
    console.log(permanentAddress);
}