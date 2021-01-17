//Zadanie 9.1

function Person(name, surname, age, country, city, language){
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.country = country;
    this.city = city;
    this.language = language;

    this.changeAge = function(age){
        this.age = age;
    }

    this.changeCity = function(city) {
        this.city = city;
    }
}

let person1 = new Person("Mateusz", "Panek", 14, "Polska", "Żywiec", "polski");
let person2 = new Person("Kamil", "Panek", 14, "Polska", "Żywiec", "polski");
let person3 = new Person("Marek", "Panek", 14, "Polska", "Żywiec", "polski");
let person4 = new Person("Dawid", "Panek", 14, "Polska", "Żywiec", "polski");
let person5 = new Person("Radek", "Panek", 14, "Polska", "Żywiec", "polski");

person1.changeAge(23);
console.log(person1.age);

person2.changeCity("Kraków");
console.log(person2.city);

//Zadanie 9.2

function Calculator(){

    this.adding = function(num1, num2){
        return num1 + num2;
    },

    this.subtraction = function(num1, num2){
        return num1 - num2;
    },

    this.multiplication = function(num1, num2){
        return num1 * num2;
    },

    this.division = function(num1, num2){
        return num1 / num2;
    }
}

let Calculator1 = new Calculator();
console.log(Calculator1.division(4,2));

//Zadanie 9.3

function Game(){

    this.changeNumber = function(){               
        number = Math.floor(Math.random()*10+1)
        console.log(number);
    }

    this.checkNumber = function(){
        if (number>5){
            console.log("koniec");
            process.exit()
        }
    }
}

Game.prototype.number;

let player1 = new Game();
let player2 = new Game();


while(true){
    player1.changeNumber();
    player2.checkNumber();}
