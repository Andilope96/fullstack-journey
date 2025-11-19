//Aufgabe 1 – Zahlensuche

//Schreibe eine Funktion findNumber, die prüft, ob eine Zahl im Array vorkommt.

/*Beispiel:

findNumber([3, 8, 12, 5], 12) → true
findNumber([3, 8, 12, 5], 9) → false


Anforderung:

Mit einer Schleife das Array durchsuchen

true zurückgeben, wenn gefunden

sonst false */

function findNumber(arr,number){
    for (let i = 0; i < arr.length; i++)
    {
        if(number == arr[i]){
            return true;
        }
  
    }
    
    return false;
}

console.log(findNumber([3, 8, 12, 5], 12));
console.log(findNumber([3, 8, 12, 5], 9));

//Aufgabe 2 – Alle geraden Zahlen finden
//Gegeben:

let numbers = [2, 7, 4, 9, 12, 5, 8];


/*Schreibe Code, der alle geraden Zahlen ausgibt:

Erwartete Ausgabe:

2
4
12
8
*/

function getEvenNumbers(arr){
    for (let i= 0; i < arr.length; i++){
        if(arr[i]%2 == 0){
            console.log(arr[i]);
        }
    }
}

console.log(getEvenNumbers(numbers));

//Aufgabe 3 – Summe aller Zahlen in einem 2D-Array
//Gegeben:

let matrix = [
  [1, 3, 5],
  [2, 4, 6],
  [10, 20, 30]
];


/*Schreibe Code, der die Summe aller Zahlen ausgibt.

Erwartete Ausgabe:

81
*/

function getSum(arr){
   let sum = 0;
    for (let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++ ){
            sum += arr[i][j];
        }
    }
    return sum
}

console.log(getSum(matrix));

//Aufgabe 4 – Kleines Projekt: Maximum in einem 2D-Array finden
//Gegeben:

let world = [
  [15, 9, 3],
  [22, 4, 8],
  [1, 0, 27]
];


/*Schreibe Code, der die größte Zahl im gesamten 2D-Array findet.

Erwartete Ausgabe:

27
*/

function getMaxNumber(arr){
    let maxNumber = arr[0][0];
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            if(maxNumber<arr[i][j]){
                maxNumber = arr[i][j];
            }
        }
    }
    return maxNumber;
}

console.log(getMaxNumber(world));

//Aufgabe 5 – Bonus (schwierig): Temperatur am nächsten zu 0
//Dies ist ähnlich wie die CodinGame-Aufgabe, die du heute erwähnt hast.
//Gegeben:

let temps = [7, -5, 30, -10, -20, 40, 10, -5];


/*Schreibe Code, der die Temperatur am nächsten an 0 findet.

Regeln:

Wenn zwei Zahlen gleich nah sind, nimm die positive.

Beispiel: 5 und -5 → Ergebnis: 5

Erwartete Ausgabe:

-1

Da -1 am nächsten an 0 ist.

*/

function getClosestToZero(arr){
    let closestToZero = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(Math.abs(arr[i]) == Math.abs(closestToZero) && arr[i]>0){
            closestToZero = Math.abs(arr[i])
        } else if(Math.abs(arr[i]) < Math.abs(closestToZero)){
            closestToZero = arr[i];
        }
    }
    return closestToZero;
}

console.log(getClosestToZero(temps));

/*---------LÖSUNG-------------------- */

/*
✅ Aufgabe 1 – findNumber
function findNumber(arr,number){
    for (let i = 0; i < arr.length; i++)
    {
        if(number == arr[i]){
            return true;
        }
    }
    return false;
}


✔ Logik perfekt.
✔ Früher return bei Treffer – genau so will man das.

Kleine Verbesserung (Good Practice):

lieber === statt ==, um Typ-Konvertierung zu vermeiden:

if (number === arr[i]) {
  return true;
}

✅ Aufgabe 2 – gerade Zahlen
function getEvenNumbers(arr){
    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 2 == 0){
            console.log(arr[i]);
        }
    }
}

console.log(getEvenNumbers(numbers));


✔ Bedingung ist richtig, Schleife ist richtig.
Einziger „Schönheitsfehler“: getEvenNumbers gibt nichts zurück → console.log(getEvenNumbers(numbers)); loggt am Ende undefined.

Besser:

getEvenNumbers(numbers); // ohne console.log drum herum


Oder du baust es als Funktion, die ein neues Array zurückgibt:

function getEvenNumbers(arr) {
  let evens = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evens.push(arr[i]);
    }
  }
  return evens;
}

console.log(getEvenNumbers(numbers));

✅ Aufgabe 3 – Summe im 2D-Array
function getSum(arr){
   let sum = 0;
   for (let i = 0; i < arr.length; i++){
     for (let j = 0; j < arr[i].length; j++ ){
       sum += arr[i][j];
     }
   }
   return sum;
}


✔ Genau das, was verlangt war.
✔ Verschachtelte Schleifen, richtige Längen, richtige Indizes.
Ergebnis: 81 → korrekt.

✅ Aufgabe 4 – Maximum im 2D-Array
function getMaxNumber(arr){
    let maxNumber = arr[0][0];
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr[i].length; j++){
            if (maxNumber < arr[i][j]){
                maxNumber = arr[i][j];
            }
        }
    }
    return maxNumber;
}


✔ Startwert richtig gewählt (arr[0][0]).
✔ Verschachtelte Schleifen sauber.
✔ Vergleichslogik korrekt.
Ergebnis: 27 → korrekt.

Das ist exakt die Art Code, die man in Junior-Interviews sehen will.

✅ Aufgabe 5 – Nächste Temperatur zu 0
function getClosestToZero(arr){
    let closestToZero = arr[0];
    for(let i = 0; i < arr.length; i++){
        if (Math.abs(arr[i]) == Math.abs(closestToZero) && arr[i] > 0){
            closestToZero = Math.abs(arr[i])
        } else if (Math.abs(arr[i]) < Math.abs(closestToZero)){
            closestToZero = arr[i];
        }
    }
    return closestToZero;
}


Logik:

closestToZero beginnt mit erstem Wert → ok.

Wenn eine Zahl näher an 0 ist → ersetze.

Wenn gleich nah und positiv → nimm die positive → genau wie gefordert.

Auch hier wieder: lieber === als ==, aber die Logik passt.

Mit einem Array wie:

[7, -5, 30, -10, -20, 40, 10, 5]


würde am Ende 5 rauskommen – korrekt, wegen der Gleich-nah-aber-positiv-Regel.

Mit deinem aktuellen temps-Array:

let temps = [7, -5, 30, -10, -20, 40, 10, -5];


ist die Zahl am nächsten zu 0 = -5 – und das liefert deine Funktion auch. Alles gut.

🎓 Fazit: Level C bestanden

Du hast:

Arrays verstanden

einfache und verschachtelte Loops sicher angewendet

Logikaufgaben gelöst

Funktionen mit Arrays + Loops kombiniert

Damit sind Tag 2 & Tag 3 aus unserem Lernplan komplett durch.
Du bist nicht hinterher – du bist locker auf Kurs.

*/