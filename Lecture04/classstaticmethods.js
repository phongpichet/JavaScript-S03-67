class Dog {
    constructor(parameters) {
        this._name = name;
    }

    introduve(){
        console.log("This is " + this._name + " ! ");
    }
    //A static method
    static bark(){
        console.log("Woof");
    }
}

const myDog = new Dog("Buster");
myDog.introduve();

//Calling the static method
Dog.bark();
