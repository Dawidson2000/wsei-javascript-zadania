//Zadanie 6.1

function yeah(){
    console.log("Udało się!");
}

yeah();

//Zadanie 6.2

function display(something){
    console.log(something);
}

display(123);
display("Wyraz");

//Zadanie 6.3

const x = (param) =>{
    return param;
}
x([1,2,3]);

//Zadanie 6.4

function display(word){
   
    let x=0;
    
    var timer = setInterval(hello, 3000);

    function hello(){
        console.log(word+x);

        if(x>=4){
            clearInterval(timer);
            console.log("Koniec");       
        }
        x++;       
        }
        
}

display("WSEI");
