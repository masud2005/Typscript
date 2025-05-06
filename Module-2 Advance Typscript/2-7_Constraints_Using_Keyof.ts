{
    // Generic constraint with keyof operator
    type Vehicle = {
        bike: string;
        car: string;
        ship: string;
    }

    type owner = "bike" | "car" | 'ship';  //Manually
    type owner1 = keyof Vehicle;


    const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
        return obj[key];
    }

    const user = {
        name: "Mr. persian",
        age: 26,
        address: "ctg",
    };

    const result = getPropertyValue(user, 'name');
    console.log(result);
}