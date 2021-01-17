//Zadanie 5.1
let x=1;

var timer = setInterval(hello, 1000);

function hello(){
    console.log("Cześć po raz " + x);
    x++;

    if(x>15){
        clearInterval(timer);
    }
}

//Zadanie 5.2

var table=[1,2,3,4,5,6,7,8,9,10]

setTimeout(()=>{
  for(let i=0;i<table.length;i++)    {
      console.log(table[i]);
  }     

let i=0;
    var interval = setInterval(()=>{
        console.log(table[i]);
        i++
      if (i>table.length) {
          clearInterval(interval);
      }
    },3000)
        
    
  
           
}, 2000);
