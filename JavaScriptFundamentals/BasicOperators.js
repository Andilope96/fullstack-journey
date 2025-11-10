/*TASK:
The postfix and prefix forms
What are the final values of all variables a, b, c and d after the code below?

let a = 1, b = 1;

let c = ++a; // c= 2 a = 2
let d = b++; // d = 1 b = 2
*/

/*SOLUTION:
The answer is:

a = 2
b = 2
c = 2
d = 1
let a = 1, b = 1;

alert( ++a ); // 2, prefix form returns the new value
alert( b++ ); // 1, postfix form returns the old value

alert( a ); // 2, incremented once
alert( b ); // 2, incremented once
*/

/*TASK:
Assignment result
What are the values of a and x after the code below?

let a = 2;

let x = 1 + (a *= 2); // a = 4 x = 5
*/

/*SOLUTION:
The answer is:
a = 4 (multiplied by 2)
x = 5 (calculated as 1 + 4)
*/

/*TASK:
Type conversions
importance: 5
What are results of these expressions?

"" + 1 + 0 // 10
"" - 1 + 0 // -10
true + false //
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // 9px
"$" + 4 + 5 // $45
"4" - 2 // 2
"4px" - 2 // 4px-2
"  -9  " + 5 // -4
"  -9  " - 5 // -14
null + 1 // 1
undefined + 1 // NaN
" \t \n" - 2 //
Think well, write down and then compare with the answer.
*/

/*SOLUTION:
"" + 1 + 0 = "10" // (1)
"" - 1 + 0 = -1 // (2)
true + false = 1
6 / "3" = 2
"2" * "3" = 6
4 + 5 + "px" = "9px"
"$" + 4 + 5 = "$45"
"4" - 2 = 2
"4px" - 2 = NaN
"  -9  " + 5 = "  -9  5" // (3)
"  -9  " - 5 = -14 // (4)
null + 1 = 1 // (5)
undefined + 1 = NaN // (6)
" \t \n" - 2 = -2 // (7)
The addition with a string "" + 1 converts 1 to a string: "" + 1 = "1", and then we have "1" + 0, the same rule is applied.
The subtraction - (like most math operations) only works with numbers, it converts an empty string "" to 0.
The addition with a string appends the number 5 to the string.
The subtraction always converts to numbers, so it makes " -9 " a number -9 (ignoring spaces around it).
null becomes 0 after the numeric conversion.
undefined becomes NaN after the numeric conversion.
Space characters are trimmed off string start and end when a string is converted to a number. Here the whole string consists of space characters, such as \t, \n and a “regular” space between them. So, similarly to an empty string, it becomes 0.
*/

/*TASK:
Fix the addition
importance: 5
Here’s a code that asks the user for two numbers and shows their sum.

It works incorrectly. The output in the example below is 12 (for default prompt values).

Why? Fix it. The result should be 3. // Weil es ein Prompt ist und Prompts werden immer als ein String interpretiert. Deswegen war 1 und 2 ein String statt einer Zahl. Mit dem Vorzeichen wird es zu einer Zahl umgewandelt.

let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(a + b); // 12
Fix: alert(+a + +b); // 3
*/

/*SOLUTION:
The reason is that prompt returns user input as a string.

So variables have values "1" and "2" respectively.

let a = "1"; // prompt("First number?", 1);
let b = "2"; // prompt("Second number?", 2);

alert(a + b); // 12
What we should do is to convert strings to numbers before +. For example, using Number() or prepending them with +.

For example, right before prompt:

let a = +prompt("First number?", 1);
let b = +prompt("Second number?", 2);

alert(a + b); // 3
Or in the alert:

let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(+a + +b); // 3
Using both unary and binary + in the latest code. Looks funny, doesn’t it?
*/