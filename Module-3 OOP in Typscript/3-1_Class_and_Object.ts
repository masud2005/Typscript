{
    class Animal {
        public name: string;
        public species: string;
        public sound: string;

        constructor(name: string, species: string, sound: string) {
            this.name = name;
            this.species = species;
            this.sound = sound;
        }

        makeSound() {
            console.log(`The ${this.name} says ${this.sound}`);
        }
    }

    const dog = new Animal("German Shepard Bhai", "dog", "Ghew Ghew");
    const cat = new Animal("Persian bhai", "cat", "meaw meaw");
    dog.makeSound();
    cat.makeSound();

}