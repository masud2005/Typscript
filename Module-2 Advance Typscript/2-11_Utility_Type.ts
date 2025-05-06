{
    type Person = {
        name: string;
        age: number;
        email?: string;
        contactNo: string;
    };

    // Pick
    type NameAge = Pick<Person, "name" | "age">;

    // Omit
    type ContactInfo = Omit<Person, "name" | "age">;

    // Partial
    type PersonOptional = Partial<Person>

    // Required
    type PersonRequired = Required<Person>

    // Readonly
    type PersonReadonly = Readonly<Person>


    type Roles = "admin" | "user" | "guest";

    // Record
    type Permissions = Record<Roles, boolean>;

    // Exclude
    type NoGuest = Exclude<Roles, "guest">

    // Extract
    type AllowedRoles = Extract<Roles, "admin" | "user">
}