{
    // Generic with Function
    const createArray = (param: string): string[] => {
        return [param];
    }

    const createArrayWithGeneric = <T>(param: T): T[] => {
        return [param];
    }

    const res1 = createArray("Bangladesh");
    const res2 = createArrayWithGeneric<string>("Bangladesh");

    type User = { id: number; name: string };
    const resGenericObj = createArrayWithGeneric<User>({
        id: 24,
        name: "Masud Rana"
    })

    const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
        return [param1, param2];
    }

    const res10 = createArrayWithTuple<string, number>("Bangladesh", 2546);
    const res11 = createArrayWithTuple<string, { name: string }>("Bangladesh", { name: "Masud" });

    const addCourseToStudent = <T>(student: T) => {
        const course = "Next Level Web Development";
        return {
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent({
        name: "Mr X",
        email: "x@gmail.com",
        devType: "NLWD",
    });

    const student2 = addCourseToStudent({
        name: "Mr Y",
        email: "y@gmail.com",
        hasWatch: "Apple Watch",
    });
    console.log(student1);


    // Merge
    function merge<T, U>(a: T, b: U): [T, U] {
        return [a, b];
    }
    const pair = merge<string, number>("Masud", 21)

    // Reverse in arrow function
    const reverse = <T>(items: T[]): T[] => {
        return items.reverse();
    };

    const reversed = reverse<number>([1, 2, 3]);


}