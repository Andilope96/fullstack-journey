/*TASK:
Is array copied?
importance: 3
What is this code going to show?

let fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");

// what's in fruits?
alert( fruits.length ); // 4
*/

/*SOLUTION:
The result is 4:

let fruits = ["Apples", "Pear", "Orange"];

let shoppingCart = fruits;

shoppingCart.push("Banana");

alert( fruits.length ); // 4
That’s because arrays are objects. So both shoppingCart and fruits are the references to the same array.
*/

/*TASK:
Array operations.
importance: 5
Let’s try 5 array operations.

Create an array styles with items “Jazz” and “Blues”.
Append “Rock-n-Roll” to the end.
Replace the value in the middle with “Classics”. Your code for finding the middle value should work for any arrays with odd length.
Strip off the first value of the array and show it.
Prepend Rap and Reggae to the array.
The array in the process:

Jazz, Blues
Jazz, Blues, Rock-n-Roll
Jazz, Classics, Rock-n-Roll
Classics, Rock-n-Roll
Rap, Reggae, Classics, Rock-n-Roll
*/
let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");

styles[(styles.length-1)/2]="Classics";

alert(styles.shift());

styles.unshift("Rap","Reggae");

console.log(styles);

/*SOLUTION:
let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
alert( styles.shift() );
styles.unshift("Rap", "Reggae");
*/

/*TASK:
Calling in an array context
importance: 5
What is the result? Why?

let arr = ["a", "b"];

arr.push(function() {
  alert( this );
});

arr[2](); // ? -> "this" because we are calling the function -> Ich habe vergessen das this kein String war und dadurch wird nicht this zurück gegeben
*/

/*SOLUTION:
The call arr[2]() is syntactically the good old obj[method](), in the role of obj we have arr, and in the role of method we have 2.

So we have a call of the function arr[2] as an object method. Naturally, it receives this referencing the object arr and outputs the array:

let arr = ["a", "b"];

arr.push(function() {
  alert( this );
})

arr[2](); // a,b,function(){...}
The array has 3 values: initially it had two, plus the function.
*/

/*TASK:
Sum input numbers
importance: 4
Write the function sumInput() that:

Asks the user for values using prompt and stores the values in the array.
Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
Calculates and returns the sum of array items.
P.S. A zero 0 is a valid number, please don’t stop the input on zero.
*/

function sumInput(){
    let numbers = [];
    while(true){
        let values = prompt("Ich brauche Werte","");
        if (values === null|| values === "" || !isFinite(values)){
            break;
        }else{
            numbers.push(+values);
        }
    }
    let sum = 0;
    for (let i = 0; i < numbers.length; i++)
    {
        sum +=numbers[i];
    }
    return sum;
}

alert (sumInput());

/*SOLUTION:

*/

/*TASK:

*/

/*SOLUTION:

*/