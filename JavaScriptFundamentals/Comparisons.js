/*TASK:
Comparisons
importance: 5
What will be the result for these expressions?

5 > 4 // true
"apple" > "pineapple" // false
"2" > "12" // false -> hab an Zahlenwerte gedacht und nicht daran das der erste Char im String 2 mit 1 verglichen wird
undefined == null // true
undefined === null // false
null == "\n0\n" // true -> null only equals undefined
null === +"\n0\n" // false
*/

/*SOLUTION:
5 > 4 → true
"apple" > "pineapple" → false
"2" > "12" → true
undefined == null → true
undefined === null → false
null == "\n0\n" → false 
null === +"\n0\n" → false
Some of the reasons:

Obviously, true.
Dictionary comparison, hence false. "a" is smaller than "p".
Again, dictionary comparison, first char "2" is greater than the first char "1".
Values null and undefined equal each other only.
Strict equality is strict. Different types from both sides lead to false.
Similar to (4), null only equals undefined.
Strict equality of different types.
*/