
{
    // Type Alias
    type Student = {
        name: string;
        age: number;
        gender: string;
        contactNo?: string;
        address: string
    }

    const student1: Student = {
        name: 'Masud',
        age: 21,
        gender: "male",
        contactNo: "01834140688",
        address: "Dinajpur"
    }
    const student2: Student = {
        name: "Mir",
        age: 40,
        gender: "male",
        address: "dhk",
    };
    const student3: Student = {
        name: "Mir",
        age: 40,
        gender: "male",
        address: "dhk",
    };


    type UserName = string;
    type IsAdmin = boolean;

    const userName: UserName = "Masud";
    const isAdmin: IsAdmin = true;


    type Add = (num1: number, num2: number) => number;
    const add: Add = (num1, num2) => num1 + num2;
}