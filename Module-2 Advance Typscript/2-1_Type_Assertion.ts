{
    let anything: any;
    anything = "Nex Level Web Development";
    // anything = "3254";
    (anything as number);

    let someValue: any = "Hello TypeScript";
    let strLength: number = (someValue as string).length;
    console.log(strLength);

    const kgToGm = (value: string | number) => {
        if (typeof value === 'string') {
            const convertedValue = parseFloat(value) * 1000;
            return `The converted value is: ${convertedValue}`;
        } else if (typeof value === 'number') {
            return value * 1000;
        }
    }
    const result1 = kgToGm(1) as number;
    const result2 = kgToGm('1');
    console.log(result1, result2);


    
    type CustomError = {
        message: string;
    };

    try {

    } catch (error) {
        console.log((error as CustomError).message);
    }
}