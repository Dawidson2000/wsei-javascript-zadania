//Zadanie 8.1

let car = {
    name: "Toyota",
    model: "Avensis",
    power: 129,
    age: 13
}
console.log(car.name + " " + car.model + " " + car.power + " " + car.age + " ");

//Zadanie 8.2

let car = {
    name: "Toyota",
    model: "Avensis",
    power: 129,
    age: 13,

    changeName(newName){
        car.name = newName;
    }
}
console.log(car.name);

car.changeName("Mazda");

console.log(car.name);

//Zadanie 8.3

let sumObject = {
    sum: 0,

    sumMethod(tab){
        for(let x in tab){
            sumObject.sum += tab[x];
        }
    }
}

let tab = [1,2,3,4,5];

sumObject.sumMethod(tab);
console.log(sumObject.sum);


//Zadanie 8.4

let car = {
    name: "Toyota",
    model: "Avensis",
    power: 129,
    age: 13
}

for(let key in car){
    console.log(key + ": " + car[key]);
}

//Zadanie 8.5

let car = {
    name: "Toyota",
    model: "Avensis",
    power: 129,
    age: 13,

    engine : {
        fuel: "benzyna",
        engineCapacity: 2
    }
}

for(let x in car.engine){
    console.log(car.engine[x]);
}

//Zadanie 8.6

let car = {
    name: "Toyota",
    model: "Avensis",
    power: 129,
    age: 13
}
car.type = "Kombi";

car.hello = function(){
    console.log("Hello");
}

console.log(car.type)
car.hello();
