//Zadanie 10.1

function Person (name,lastname,age,country,city){
    
    this.name = name;
    this.lastname = lastname;
    this.age=age ;
    this.country=country;
    this.city=city;
    
    this.showDetails = function(){
      console.log(`Person: ${this.name} ${this.lastname} age: ${this.age} country: ${this.country} city: ${this.city}`);  
    }
    
    this.addOneYear = function() {
        ++this.age;
    }
    
}

const person =new Person ('leon','nowak',19,'poland','katowice');
const person2 =new Person ('kamil','kowal',29,'poland', 'krakow');

person.showDetails();
person.addOneYear();
person.addOneYear();
person.addOneYear();
person.showDetails();

person2.showDetails();
person2.addOneYear();
person2.addOneYear();
person2.addOneYear();
person.showDetails();

//Zadanie 10.2

console.log("\nZadanie 2:");
  
  person.favouriteMeal = [];
  secondPerson.favouriteMeal = [];
  
  function showMeal() {
    console.log("Ulubione posiłki: ", this.favouriteMeal.join(", "));
  }
  
  function addMeal(meal) {
    this.favouriteMeal.push(meal);
  }
  
  person.showMeal = showMeal;
  person.addMeal = addMeal;
  secondPerson.showMeal = showMeal;
  secondPerson.addMeal = addMeal;
  
  person.addMeal("schabowy");
  person.addMeal("placek");
  person.addMeal("pierogi");
  person.showMeal();
  
  secondPerson.addMeal("schabowy 2");
  secondPerson.addMeal("placek 2");
  secondPerson.addMeal("pierogi 2");
  secondPerson.showMeal();

//Zadanie 10.3

function Calculator(){

  a: 0;
  b: 0;

  this.saveNumbers = function(num1, num2)
  {
      a = num1;
      b = num2;
  }

  this.adding = function(){
      console.log(a+b);
  },

  this.subtraction = function(){
      console.log(a-b);
  },

  this.multiplication = function(){
      console.log(a*b);
  },

  this.division = function(){
      if(b===0)
          console.log("Dzielenie przez 0!");
      else
          console.log(a/b);    
  }
}

let cal = new Calculator();

cal.saveNumbers(4,2);
cal.adding();

cal.saveNumbers(4,0);
cal.division();

cal.saveNumbers(4,0);
cal.multiplication();

//Zadanie 10.4

function Ladder (){
    this.steps = 0;
    
    this.up = function(){
        this.steps++;
    }
    
    this.down = function(){
        if(this.steps > 0){
            this.steps--;
        }else {
            console.log('Jesteś na ziemi');
        }
        
    }
    this.showLevel = function(){
        console.log(this.steps);
    }
}

const ladder = new Ladder();
ladder.up();
ladder.up();
ladder.up();
ladder.up();
ladder.up();
ladder.down();
ladder.showLevel();
