//Zadanie 4.1
let x=2,
    y=6;

    if(x>y)
        Console.log(x);
    else
        Console.log(y);  

//Zadanie 4.2
let x=1,
    y=2,
    z=3;

if(x>y && x>z)
{
    Console.log(x);
}
else if(y>x && y>z)
{
    Console.log(y);
}
else
{
    Console.log(z);
}            

//Zadanie 4.3

for(let i=0; i<10; i++)
{
    Console.log("Lubię JavaScript")
}

//Zadanie 4.4
let result = 0;
for(i=0; i<=10; i++){
    result += i;
}
console.log(result);

//Zadanie 4.5
var n = 5;
for(i=0; i<n; i++){
    if (i%2 === 0){
        console.log(i + " parzysta");
    }else{
        console.log(i + " nieparzysta");
    }
}
// Zadanie 4.6
let n = 5;

for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){
        console.log("i= " + i + ", j= " + j);
    }
}

// Zadanie 4.7
for(let i = 0; i <= 100; i++){
    if(i===0){
        console.log("0");
    } else if (i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    } else if (i % 3 === 0){
        console.log('Fizz');
    } else if (i % 5 === 0){
        console.log('Buzz');
    } else{
        console.log(i)
    }
}

//Zadanie 4.8
const a = () => {    
    for(let i=0; i<5; i++)
    {
        let result="";
        for(let j=0; j<i+1; j++)
        {
        result += "*";   
        }
    console.log(result);
    }
};

const b = () => {
    const result = [];
    for (let i = 1; i <= 5; i++) {
        result[i] = '';
        for (let j = i; j < 5; j++) {
            result[i] += ' ';
        }
        const max = (2 * i - 1);
        for (let j = 1; j <= max; j=j+2) {
            result[i] += ' ';
            result[i] += '*';
        }
    }
    console.log(result.join('\n'));
};

const c = () => {
    const result = [];
    for (let i = 1; i <= 5; i++) {
        result[i] = '';
        for (let j = i; j < 5; j++) {
            result[i] += ' ';
        }
        const max = (2 * i - 1);
        for (let j = 1; j <= max; j++) {
            result[i] += '*';
        }
    }
    console.log(result.join('\n'));
};

a();
b();
c();
