/*TASK:
What's the result of OR?
importance: 5
What is the code below going to output?

alert( null || 2 || undefined ); // 2
*/

/*SOLUTION:
The answer is 2, that’s the first truthy value.

alert( null || 2 || undefined );
*/

/*TASK:
What's the result of OR'ed alerts?
importance: 3
What will the code below output?

alert( alert(1) || 2 || alert(3) ); // 1 -> weil alert scheinbar undefined zurückliefert und das ist falsly und deswegen das zweite Argument
*/

/*SOLUTION:
The answer: first 1, then 2.

alert( alert(1) || 2 || alert(3) );
The call to alert does not return a value. Or, in other words, it returns undefined.

The first OR || evaluates its left operand alert(1). That shows the first message with 1.
The alert returns undefined, so OR goes on to the second operand searching for a truthy value.
The second operand 2 is truthy, so the execution is halted, 2 is returned and then shown by the outer alert.
There will be no 3, because the evaluation does not reach alert(3).
*/

/*TASK:
What is the result of AND?
importance: 5
What is this code going to show?

alert( 1 && null && 2 ); // null
*/

/*SOLUTION:
The answer: null, because it’s the first falsy value from the list.

alert(1 && null && 2);
*/

/*TASK:
What is the result of AND'ed alerts?
importance: 3
What will this code show?

alert( alert(1) && alert(2) ); // 1 then 1 -> Ich dachte 1 und dann wäre es undefined deswegen wieder der erste Falsly wert also Alert(1) aber es ist dann unedefined
*/

/*SOLUTION:
The answer: 1, and then undefined.

alert( alert(1) && alert(2) );
The call to alert returns undefined (it just shows a message, so there’s no meaningful return).

Because of that, && evaluates the left operand (outputs 1), and immediately stops, because undefined is a falsy value. And && looks for a falsy value and returns it, so it’s done.
*/

/*TASK:
The result of OR AND OR
importance: 5
What will the result be?

alert( null || 2 && 3 || 4 ); // true -> ich dachte zuerst 2&&3 das ist ja zwei mal true also true. Danach das erste was bei Or truhly ist. Aber es geht bei && zum letzten Truthy wenn nichts false ist.
*/

/*SOLUTION:
The answer: 3.

alert( null || 2 && 3 || 4 );
The precedence of AND && is higher than ||, so it executes first.

The result of 2 && 3 = 3, so the expression becomes:

null || 3 || 4
Now the result is the first truthy value: 3.
*/

/*TASK:
Check the range between
importance: 3
Write an if condition to check that age is between 14 and 90 inclusively.

“Inclusively” means that age can reach the edges 14 or 90.
*/
//if (age >= 14 &&  age <= 90){}

/*SOLUTION:
if (age >= 14 && age <= 90)
*/

/*TASK:
Check the range outside
importance: 3
Write an if condition to check that age is NOT between 14 and 90 inclusively.

Create two variants: the first one using NOT !, the second one – without it.
*/
//if(age !>=14 && !<= 90) // wrong
/*SOLUTION:
The first variant:

if (!(age >= 14 && age <= 90))
The second variant:

if (age < 14 || age > 90)
*/

/*TASK:
A question about "if"
importance: 5
Which of these alerts are going to execute?

What will the results of the expressions be inside if(...)?

if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' ); // first and third because first is true second is false and third is true
*/

/*SOLUTION:
The answer: the first and the third will execute.

Details:

// Runs.
// The result of -1 || 0 = -1, truthy
if (-1 || 0) alert( 'first' );

// Doesn't run
// -1 && 0 = 0, falsy
if (-1 && 0) alert( 'second' );

// Executes
// Operator && has a higher precedence than ||
// so -1 && 1 executes first, giving us the chain:
// null || -1 && 1  ->  null || 1  ->  1
if (null || -1 && 1) alert( 'third' );
*/

/*TASK:
Check the login
importance: 3
Write the code which asks for a login with prompt.

If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

The password is checked as follows:

If it equals “TheMaster”, then show “Welcome!”,
Another string – show “Wrong password”,
For an empty string or cancelled input, show “Canceled”
*/

let lockedUser= prompt("Who's there?","");
if (lockedUser == "Admin"){
    let password= prompt("Password?","");
    if(password == "TheMaster"){
        alert("Welcome!");
    }else if(password == "" || password == null){
        alert("Canceled");
    }else {
        alert("Wrong password");
    }
}else if(lockedUser == "" || lockedUser == null){
    alert("Canceled");
}else {
    alert("I don't know you");
}


/*SOLUTION:
let userName = prompt("Who's there?", '');

if (userName === 'Admin') {

  let pass = prompt('Password?', '');

  if (pass === 'TheMaster') {
    alert( 'Welcome!' );
  } else if (pass === '' || pass === null) {
    alert( 'Canceled' );
  } else {
    alert( 'Wrong password' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Canceled' );
} else {
  alert( "I don't know you" );
}
*/