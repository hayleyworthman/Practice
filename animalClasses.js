// serve as basis for creating objects

class Animal{
    // constructor(){
    constructor(breed, origin, color, diet){
        // this.breed = "giraffe"
        // this.origin = "Africa";
        // this.color = "orange";
        // this.diet = "leaves";
        this.animalBreed = breed
        this.animalOrigin = origin;
        this.animalColor = color;
        this.animalDiet = diet;
    }

    // create a function
    welcome(){
        console.log("welcome to the " + this.animalBreed + " sanctuary. We have plenty of " + this.animalDiet + " to fill your appetite. You've had a long trip from " + this.animalOrigin + ", take a load off. It is " + this.hasWings + " that you can fly.")
    }
}

//extends in regards to inheritance
class Bug extends Animal{
    // constructor(hasWings){
    constructor(breed, origin, color, diet, wings){
        super(breed, origin, color, diet); //means we're taking properties from the main class
        this.hasWings = wings;
    }
}

// let animal = new Animal();
let giraffe = new Animal("giraffe", "Africa", "orange", "leaves");
let bug1 = new Bug("fly", "Mexico", "black", "garbage", true)


giraffe.welcome();
bug1.welcome();

