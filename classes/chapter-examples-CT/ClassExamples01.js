//Try adding new properties inside constructor.
class Astronaut {
   constructor(name, age, mass){
     this.name = name;
     this.age = age;
     this.mass = mass;
   }
}

let fox = new Astronaut('Fox', 7, 12);

console.log(fox);
console.log(fox.age, fox.color);                // Prints out '7' & 'undefined'

fox.age = 9;                                    // Assigns Age to be '9'
fox.color = 'red';                              // Creates 'color' property for 'fox' & assigns it 'red'

console.log(fox);                               // Printos out fox's properties, including 'color'
console.log(fox.age, fox.color);                // Prints out '9' 'red'

//Try modifying or adding properties below.
