{
    // Type Guard

    // typeof -- type guard
    type Alphaneumeric = string | number;

    const add = (param1: Alphaneumeric, param2: Alphaneumeric): Alphaneumeric => {
        if (typeof param1 === 'number' && typeof param2 === 'number') {
            return param1 + param2;
        } else {
            return param1.toString() + param2.toString();
        }
    }

    const result1 = add('2', '2');
    console.log(result1);


    // in --> type guard
    type NormalUser = {
        name: string;
    }
    type AdminUser = {
        name: string;
        role: 'admin';
    }

    const getUser = (user: NormalUser | AdminUser) => {

        if ('role' in user) {
            console.log(`My name is ${user.name} and my role is ${user.role}`);
        } else {
            console.log(`My name is ${user.name}`);
        }
    }

    const normalUser: NormalUser = {
        name: "Rana",
    }
    const adminUser: AdminUser = {
        name: "Masud",
        role: "admin",
    }
    getUser(adminUser);
}