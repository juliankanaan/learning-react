// create & constuct class

class Animal {
  name; // string
  constructor(name){
    this.name = name;
  }
  speak(){  //(to be overrided by children)
    console.log(`${this.name} makes some kind of noise.`);
  }
}
class Bird extends Animal {

  constructor(name){
    super(name); // same initialization as parent
  }
  speak(){
    console.log(`${this.name} says chirp.`);
  }
}

let parakeet = new Bird("parakeet");
parakeet.speak(); // parakeet says chirp

let animal1 = new Animal("random animal");
animal1.speak(); // random animal makes some kind of noise
