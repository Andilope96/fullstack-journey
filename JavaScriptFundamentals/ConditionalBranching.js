/*TASK:
if (a string with zero)
importance: 5
Will alert be shown? // true wird angezeigt weil String nicht leer und dadurch nicht falsly also false

if ("0") {
  alert( 'Hello' );
} 
*/

/*SOLUTION:
Yes, it will.

Any string except an empty one (and "0" is not empty) becomes true in the logical context.

We can run and check:

if ("0") {
  alert( 'Hello' );
}
*/

/*TASK:
The name of JavaScript
importance: 2
Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’

If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “You don’t know? ECMAScript!”
*/
let officialNameJavaScript = prompt("What is the 'offical name of JavaScript?","");

if(officialNameJavaScript == "ECMAScript"){
    alert("Right!");
}else{
    alert("You don't know?'ECMAScript'!");
}

/*SOLUTION:
<!DOCTYPE html>
<html>

<body>
  <script>
    'use strict';

    let value = prompt('What is the "official" name of JavaScript?', '');

    if (value == 'ECMAScript') {
      alert('Right!');
    } else {
      alert("You don't know? ECMAScript!");
    }
  </script>


</body>

</html>
*/

/*TASK:
Show the sign
importance: 2
Using if..else, write the code which gets a number via prompt and then shows in alert:

1, if the value is greater than zero,
-1, if less than zero,
0, if equals zero.
In this task we assume that the input is always a number.
*/
let value = prompt("Gib mir eine Zahl!","");

if(value > 0){
    alert(1);
}else if (value < 0){
    alert(-1);
}else if (value == 0){
    alert(0);
}

/*SOLUTION:
let value = prompt('Type a number', 0);

if (value > 0) {
  alert( 1 );
} else if (value < 0) {
  alert( -1 );
} else {
  alert( 0 );
}
*/

/*TASK:
Rewrite 'if' into '?'
importance: 5
Rewrite this if using the conditional operator '?':

let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}

let result = (a + b < 4) ? 'Below' : 'Over';
*/

/*SOLUTION:
let result = (a + b < 4) ? 'Below' : 'Over';
*/

/*TASK:
Rewrite 'if..else' into '?'
importance: 5
Rewrite if..else using multiple ternary operators '?'.

For readability, it’s recommended to split the code into multiple lines.

let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}

let message = (login == 'Employee')? 'Hello':
(login == 'Director')? 'Greetings':
(login == '')? 'No login':
'';

*/

/*SOLUTION:
let message = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';
*/