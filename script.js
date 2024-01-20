class Animal {
  constructor(species) {
    this._species = species;
  }

  get species() {
    return this._species;
  }

  makeSound() {
    console.log(`${this.species} makes a sound`);
  }
}

class Cat extends Animal {
  purr() {
    console.log("purr");
  }
}

class Dog extends Animal {
  bark() {
    console.log("woof");
  }
}

// Example usage:

// Creating an instance of the Animal class
const genericAnimal = new Animal("Generic Species");
console.log(`Animal: ${genericAnimal.species}`);
genericAnimal.makeSound();

// Creating an instance of the Cat class
const cat = new Cat("Domestic Cat");
console.log(`Cat: ${cat.species}`);
cat.makeSound();
cat.purr();

// Creating an instance of the Dog class
const dog = new Dog("Golden Retriever");
console.log(`Dog: ${dog.species}`);
dog.makeSound();
dog.bark();
