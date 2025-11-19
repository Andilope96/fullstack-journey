//Bitte beantworte jede Aufgabe mit JavaScript-Code.

//Aufgabe 1:
//Erstelle ein Array mit den Zahlen: 5, 10, 15, 20.
//Gib das erste und das letzte Element mit console.log aus.

let zahlen = [5, 10, 15, 20];
console.log(zahlen[0]);
console.log(zahlen[3]);
//Alternativ:
console.log(zahlen.shift());
console.log(zahlen.pop());

//Aufgabe 2:
//Schreibe eine Schleife, die alle Elemente dieses Arrays einzeln ausgibt:

let names = ["Anna", "Ben", "Chris"];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

//Aufgabe 3:
//Was gibt der folgende Code aus — und warum?

let numbers = [2, 4, 6];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum = sum + numbers[i];
}

console.log(sum); // Die Summe aller Zahlen im Array

//Aufgabe 4:

//Schreibe einen Nested Loop, der dieses 2D-Array vollständig ausgibt:

let grid = [
  [1, 2],
  [3, 4],
  [5, 6],
];

for (let i = 0; i < grid.length; i++) {
  for (let j = 0; j < grid.length; j++) {
    console.log(grid[i][j]);
  }
}

/*Erwartete Ausgabe:

1
2
3
4
5
6
*/

//Aufgabe 5:

//Schreibe einen Code, der im Array
let nums = [3, 7, 2, 9];
//die größte Zahl findet und in die Konsole schreibt. */
let biggestNumber = 0;
for (let i = 0; i < nums.length; i++) {
  if (nums[i] > biggestNumber) {
    biggestNumber = nums[i];
  }
}
console.log(biggestNumber);

/*--------------------LÖSUNG---------------------- */

/*✅ Level B – Auswertung

Du hast sehr gut gearbeitet – nur eine kleine Korrektur bei Aufgabe 4, sonst alles richtig.
Hier ist das vollständige Feedback:

🟩 Aufgabe 1 — RICHTIG

Deine Lösung:

let zahlen = [5, 10, 15, 20];
console.log(zahlen[0]);
console.log(zahlen[3]);


✔️ Korrekt.

Alternative mit shift/pop ist auch richtig, aber beachte:

shift() entfernt das erste Element

pop() entfernt das letzte Element

🟩 Aufgabe 2 — RICHTIG
let names = ["Anna", "Ben", "Chris"];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}


✔️ Perfekt.
Dein Schleifen-Aufbau ist sauber.

🟩 Aufgabe 3 — RICHTIG
let zahlen = [2, 4, 6];
let sum = 0;

for (let i = 0; i < zahlen.length; i++) {
  sum = sum + zahlen[i];
}

console.log(sum);


✔️ Sehr gut.
➡️ Ausgabe: 12
➡️ Grund: 2 + 4 + 6

🟧 Aufgabe 4 — KLEINER FEHLER

Du hast:

for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
        console.log(grid[i][j]);
    }
}


Der Fehler:
Du hast bei der inneren Schleife wieder grid.length verwendet.
grid.length = 3
aber jede Zeile hat nur 2 Elemente → Indexfehler.

Richtig wäre:

for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
        console.log(grid[i][j]);
    }
}


✔️ Jetzt stimmt’s:
1, 2, 3, 4, 5, 6

🟩 Aufgabe 5 — RICHTIG
let nums = [3, 7, 2, 9];
let biggestNumber = 0;

for (let i = 0; i < nums.length; i++) {
  if (nums[i] > biggestNumber) {
    biggestNumber = nums[i];
  }
}

console.log(biggestNumber);


✔️ Ergebnis: 9
✔️ Logik korrekt.

Ein Profi-Tipp:
Bei negativen Zahlen wäre 0 als Startwert falsch.
Besser:

let biggestNumber = nums[0];
 */
