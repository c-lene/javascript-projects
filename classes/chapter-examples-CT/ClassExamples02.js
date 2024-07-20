// Use terminal commands to see what happens when we call Astronaut but do not pass in 3 arguments.

// Next, set default values for 1 or more of the parameters in constructor.

class Astronaut {
   //constructor(name, age, mass){
   constructor(name, age, mass = 54){                 // Setting Default value for 'mass'
     this.name = name;
     this.age = age;
     this.mass = mass;
   }
}

let tortoise = new Astronaut('Speedy', 120);

console.log(tortoise.name, tortoise.age, tortoise.mass);            

// What happens if we call Astronaut and pass in MORE than 3 arguments? TRY IT!
// The extra arguments are ignored & does not show up in output due to no Key to associate the value with.


let tortoise01 = new Astronaut('Slow-poke', 150, 300, 400, 500);
console.log(tortoise01);
