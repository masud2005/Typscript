{
    type GenericArray<T> = Array<T>

    // const rollNumbers: number[] = [3, 6, 8];
    const rollNumbers: GenericArray<number> = [3, 6, 8];

    // const mentors: string[] = ["Mr. X", "Mr. Y", "Mr. Z"];
    const mentors: GenericArray<string> = ["Mr. X", "Mr. Y", "Mr. Z"];

    // const boolArray: boolean[] = [true, false, true];
    const boolArray: GenericArray<boolean> = [true, false, true];

    type User = {
        name: string;
        age: number;
    }

    const user: GenericArray<User> = [
        {
            name: "Masud",
            age: 21
        },
        {
            name: "rana",
            age: 21
        }
    ]

    // Generic tuple
    type GenericTuple<X, Y> = [X, Y];

    const manush: GenericTuple<string, string> = ["Mr. X", "Mr. Y"];

    const userWithId: GenericTuple<number, { name: string, email: string }> = [
        324324,
        {
            name: "Masud Rana",
            email: "masud20012005@gmail.com"
        }
    ]


    // Basic Generic function
    function identity<T>(value: T): T {
        return value;
    }
    let result1 = identity<string>("Masud");
    let result2 = identity<number>(3245);


    // Generic array function
    function getFirsElement<T>(arr: T[]): T {
        return arr[0];
    }
    const firstNum = getFirsElement<number>([21, 45, 454, 45, 2]);
    const firstStr = getFirsElement<string>(["a", "b", "c"]);
}