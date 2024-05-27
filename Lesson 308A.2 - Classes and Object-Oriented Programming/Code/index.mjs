// class Animal{
//   constructor(eyes,legs,isawake,ismoving) {
//     this.eyes =eyes,
//     this.legs =legs,
//     this.isawake = isawake,
//     this.ismoving= ismoving
//   }
  
// }

// const cat1 = new Animal(2,4,true,false);
// console.log(cat1)

// const myobject ={
//   city:"Madrid",
//   greet(){
//     console.log(`Greetings from ${this.city}`)
//   }
// }

// myobject.greet();

class Animal {
	constructor(eyes, legs, isAwake, isMoving) {
		this.eyes = eyes;
    this.legs = legs;
    this.isAwake = isAwake;
    this.isMoving = isMoving;
	  // return is not needed because the new object is returned by default
	}
  sleep() {
    this.isAwake = false;
  }
  wake() {
    this.isAwake = true;
  }
  sit() {
    this.isMoving = false;
  }
  walk() {
    this.isMoving = true;
  }
  speak(sound) {
    console.log(sound);
  }
  toString(animal = Animal){
    return `This ${animal} has ${this.eyes} eyes and ${this.legs} legs.
     It ${this.isAwake ? 'is' : 'is not'} awake, and
      ${this.isMoving ? 'is' : 'is not'} moving.`;
}

}
class Cat extends Animal{
  constructor(fur,isAwake,isMoving){
    super(2,4,isAwake,isMoving);
    this.fur = fur;
      }
   speak(){
    return super.toString("meow....")
   }   
   toString(){
    return super.toString("cat");
   }
}
 class Dog extends Animal{
  constructor(fur,isAwake,isMoving){
    super(2,4,isAwake,isMoving);
    this.fur = fur;
  }
  speak(){
    super.speak("woof!");
   }
   toString(){
    return super.toString("Dog")
   }
 }
class Cow extends Animal{
  constructor(hair,isAwake,isMoving){
    super(2,4,isAwake,isMoving);
    this.hair =hair;
  }
  speak(){
   super.speak("Moo.")   
  }
  toString(){
    return super.toString("cow")
  }
}



const cat1 = new Cat("Orange", true, false);
const cat2 = new Cat("Black and White", false, false);
const dog1 = new Dog("Gold", true, true);
const cow1 = new Cow("Brown", true, false);


console.log(cat1)

console.log(cat2)
console.log(dog1)
console.log(cow1)



class Learner {
  #grades = [];
  #name = {
    first: '',
    last: '',
  }
  #age;

	constructor(firstName, lastName, age) {
		this.#name.first = firstName;
    this.#name.last = lastName;
    this.#age = age;
	}
  get name() {
    return this.#name.first + ' ' + this.#name.last; 
  }
  get age() {
    return this.#age;
  }
  // set grades(grade){
  //   grade = Number(grade);
    
  //   if(grade >=0 && grade <= 100){
  //     this.#grades.push(grade);
  //   }
  // } 
  addGrades(...grades){
    grades =grades.flat();
    grades.forEach((grade) => {
      grade =Number(grade);
      if(grade >= 0 && grade <= 100){
        this.#grades.push(grade);
      }

    });
  }
  get average(){
    const arr =[...this.#grades];
    arr.sort((a,b) => a-b).shift();
    return arr.reduce((a,b) => a+b)/arr.length;
  }
}

const learner1 = new Learner('Leeroy', 'Jenkins', 18);

learner1.grade