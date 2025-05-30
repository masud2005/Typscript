"use strict";
{
    // Spread operator
    // Rest operator
    // Spread operator
    const bros1 = ["Mir", "Firoz", "Mizan"];
    const bros2 = ["Tanmoy", "Nahid", "Rahat"];
    bros1.push(...bros2);
    const mentors1 = {
        typescript: "Mezba",
        redux: "Mir",
        dbms: "Mizan",
    };
    const mentors2 = {
        prisma: "Firoz",
        next: "Tanmoy",
        cloud: "Nahid",
    };
    const mentorList = Object.assign(Object.assign({}, mentors1), mentors2);
    // Rest operator
    const greatFriends = (friend1, friend2, friend3) => {
        return `Hi ${friend1} ${friend2} ${friend3}`;
    };
    greatFriends("Abul", "kabul", "babul");
    const allFriends = (...friends) => {
        friends.forEach((friend) => console.log(`Hi ${friend}`));
    };
    allFriends("Abul", "kabul", "babul", "ubul", "labul");
}
