{
    // Conditional Type
    type a1 = number;
    type b1 = string;

    type x = a1 extends null ? true : false; //Conditional type
    type y = a1 extends null ? true : b1 extends undefined ? undefined : any;


    type Sheikh = {
        bike: string;
        car: string;
        ship: string;
        plane: string;
    }

    // type checkVehicle<T> = T extends "bike" | "Car" | "ship" ? true : false;
    type checkVehicle<T> = T extends keyof Sheikh ? true : false;
    type hasBike = checkVehicle<"bike">;
}