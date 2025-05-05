{
    // Union
    type FrontendDeveloper = "fakibazDeveloper" | "juniorDeveloper";
    type FullstackDeveloper = 'frontendDeveloper' | 'expertDeveloper'

    type Developer = FrontendDeveloper | FullstackDeveloper;

    const newDeveloper: FrontendDeveloper = "juniorDeveloper"


    type User = {
        name: string;
        email?: string;
        gender: "male" | "female";
        bloodGroup: "O+" | "A+" | "B+" | "AB+"
    }

    const user1: User = {
        name: 'persian',
        gender: 'male',
        bloodGroup: 'B+'
    }


    // Intersection
    type FrontendDeveloper1 = {
        skills: string[];
        designation1: "Frontend Developer";
    }

    type BackendDeveloper2 = {
        skills: string[];
        designation2: "Backend Developer";
    };

    type FullstackDeveloper1 = FrontendDeveloper1 & BackendDeveloper2;

    const fullstackDeveloper: FullstackDeveloper1 = {
        skills: ["HTML", "CSS", "JS", "REACT", "NODE", "EXPRESS", "MONGODB"],
        designation1: "Frontend Developer",
        designation2: "Backend Developer",
    }
}