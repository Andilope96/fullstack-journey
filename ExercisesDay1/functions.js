//Schreibe eine Funktion:

function greet(name) {
  return "Hallo " + name;
}
//Rufe sie mit 3 verschiedenen Namen auf.
greet("Nina");
greet("Appa");
greet("Poppy");

//Eine Funktion, die Zahlen von 1 bis N ausgibt:

function countTo(n){
    for(let i=1;i<=n;i++){
        console.log(i);
    }
}
countTo(+prompt("Ich brauche ein N",""))

//Eine Funktion, die prüft, ob eine Zahl gerade oder ungerade ist:

function isEven(num){
    if(num%2 == 0){
        return "Die Zahl ist gerade";
    }else{
        return "Die Zahl ist ungerade";
    }
}

//Eine Funktion, die das Maximum von drei Zahlen findet:

function maxOfThree(a,b,c){
    if(a>b && a >c ){
        return "a is max";
    } else if (b>a && b>c){
        return "b is max"; 
    } else {
        return "c is max"
    }
}