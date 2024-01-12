//complete this code
class Animal {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  makeSound() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  bark() {
    console.log(`${this.name} barks`);
  }
}

class Cat extends Animal {
  meow() {
    console.log(`${this.name} meows`);
  }
}

// Example usage:

// Creating an instance of the Animal class
const genericAnimal = new Animal("Generic Animal");
console.log(`Animal: ${genericAnimal.name}`);
genericAnimal.makeSound();

// Creating an instance of the Dog class
const dog = new Dog("Buddy");
console.log(`Dog: ${dog.name}`);
dog.makeSound();
dog.bark();

// Creating an instance of the Cat class
const cat = new Cat("Whiskers");
console.log(`Cat: ${cat.name}`);
cat.makeSound();
cat.meow();
