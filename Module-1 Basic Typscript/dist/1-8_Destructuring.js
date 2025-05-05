"use strict";
{
    // Destructuring
    // Object destructuring
    const user = {
        id: 345,
        name: {
            firstName: "Mezbaul",
            middleName: "Abedin",
            lastName: "Persian",
        },
        contactNo: "0170000000",
        address: "Uganda",
    };
    const { contactNo, name: { middleName } } = user;
    // array destructuring
    const myFriends = ["chandler", "joey", "ross", "rachel", "monica", "phoebe"];
    const [first, second, bestFriend] = myFriends;
    const [, , myFriend, ...others] = myFriends;
}
