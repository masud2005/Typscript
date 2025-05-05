{

    // Spread operator
    // Rest operator


    // Spread operator
    const bros1: string[] = ["Mir", "Firoz", "Mizan"];
    const bros2: string[] = ["Tanmoy", "Nahid", "Rahat"];
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

    const mentorList = {
        ...mentors1,
        ...mentors2
    }


    // Rest operator
    const greatFriends = (friend1: string, friend2: string, friend3: string) => {
        return `Hi ${friend1} ${friend2} ${friend3}`;
    }
    greatFriends("Abul", "kabul", "babul");

    const allFriends = (...friends: string[]) => {
        friends.forEach((friend: string) => console.log(`Hi ${friend}`));
    }
    allFriends("Abul", "kabul", "babul", "ubul", "labul");
}

