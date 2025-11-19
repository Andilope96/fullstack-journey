//Level A – Grundlagenfragen
//Frage 1:
//Was ist ein Array in JavaScript — und wofür verwendet man es?

//1) Ein Array ist wie eine Variable ich glaube In JavaScript ist es wie ein Object. Indem du mehrere Werte speichern kannst die durch ein Komma separiert werden. Und die Werte sind Index Basiert.

//Frage 2:
//Wie greifst du in diesem Array auf das Element "Banana" zu?
let fruits = ["Apple", "Banana", "Cherry"];
//Gib den exakten Code an, der "Banana" ausliest.
console.log(fruits[1])

//Frage 3:
//Welche Schleifen-Arten kennst du in JavaScript? (mind. 3 nennen)

//3) while, for und do while oder for i in oder for i of

//Frage 4:
//Was ist ein „Nested Loop“?

//4) Eine Schleife in einer Schleife

//Frage 5:
//Was macht der folgende Code?

/*for (let i = 0; i < 3; i++) {
  console.log(i);
}*/

//Was wird in der Konsole ausgegeben?

//5) gibt mir alle zahlen von 0 bis 2 aus

/* ------------- LÖSUNG -------------*/

/*
1) Was ist ein Array?

✔️ Deine Antwort ist korrekt:

Arrays speichern mehrere Werte in einer Variable.

Werte sind indexbasiert.

Intern sind Arrays technische „Objects“ in JavaScript (Stimmt!).

Perfekt formuliert.

2) Zugriff auf Banana

✔️ Richtig:

console.log(fruits[1]);

3) Schleifen-Arten

✔️ Alles korrekt:

for

while

do...while

for...of (richtig!)

for...in (gibt’s auch, aber wird eher für Objekte benutzt)

Sehr gut.

4) Nested Loop

✔️ Richtig: Eine Schleife in einer Schleife.

5) Was gibt der Code aus?

✔️ 0, 1, 2
*/