{
    // Constrains
    const addCourseToStudent = <T extends { id: number, name: string, email: string }>(student: T) => {
        const course = "Next Level Web Development";
        return {
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent({
        id: 3454,
        name: "Mr X",
        email: "x@gmail.com",
        devType: "NLWD",
    });

    const student2 = addCourseToStudent({
        id: 4324,
        name: "Mr Y",
        email: "y@gmail.com",
        hasWatch: "Apple Watch",
    });

    const student3 = addCourseToStudent({
        id: 3454,
        name: "Mr Z",
        email: "z@gmail.com",
        role: "Stuend"
    })
}