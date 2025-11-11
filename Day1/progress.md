## Day 1 – JavaScript Fundamentals (Sections 2.1 – 2.18) Spend Time: 12 Hours

Today I worked through JavaScript fundamentals from https://javascript.info/.  
Below is a brief summary of each lesson and what I understood:

### 2.1 – Hello, World!
Learned how to include JavaScript in a web page and display output using `alert`.  
Basic structure of a script tag and browser execution.

### 2.2 – Code Structure
Statements end with semicolons, code blocks use `{}`.  
Whitespace is mostly optional but improves readability.

### 2.3 – The Modern Mode, "use strict"
`"use strict"` enables more strict and predictable behavior.  
Modern JavaScript modules use strict mode by default.

### 2.4 – Variables
Variables using `let`, constants using `const`.  
Understanding naming conventions and why `var` is outdated.

### 2.5 – Data Types
JavaScript has dynamic typing.  
Primitive types (string, number, boolean, null, undefined, bigint, symbol) and objects.

### 2.6 – Interaction: alert, prompt, confirm
How the browser interacts with the user:
- `alert()` shows a message.
- `prompt()` gets input (returns string or null).
- `confirm()` returns true/false.

### 2.7 – Type Conversions
Strings convert to numbers with `+`, `Number()`, `Boolean()`.  
Falsy values: `""`, `0`, `null`, `undefined`, `NaN`.

### 2.8 – Basic Operators
Arithmetic, unary operators, assignment, increment/decrement, and operator precedence.  
Important note: `+` can concatenate strings.

### 2.9 – Comparisons
Comparisons convert values to numbers except strict equality (`===`).  
Notable edge case: `null >= 0` is true, but `null == 0` is false.

### 2.10 – Conditional Branching
`if`, `else if`, `else` and the ternary `? :` operator.
Conditional logic controls program flow.

### 2.11 – Logical Operators
`||` returns the first truthy value.  
`&&` returns the first falsy value.  
`!` negates a value.

### 2.12 – Nullish Coalescing Operator (??)
`x ?? y` returns the first defined value.  
Useful when distinguishing between `null/undefined` and valid values like `0`.

### 2.13 – Loops: while and for
Looping structures to repeat code.  
Understanding counters, break/continue, and loop conditions.

### 2.14 – The "switch" Statement
A multi-branch conditional alternative to many `if` checks.  
Uses strict comparison.

### 2.15 – Functions
Defining reusable code blocks.  
Return values, parameters, function naming.

### 2.16 – Function Expressions
Functions can be stored in variables.  
They are treated as values and can be passed around.

### 2.17 – Arrow Functions
Shorter syntax for function expressions.  
Useful especially in callbacks.  
Important difference: Arrow functions do not have their own `this`.

### 2.18 – JavaScript Specials
Summary of JavaScript behaviors: dynamic typing, hoisting, value categories, built-in operations.  
Reminder that JavaScript is flexible but requires discipline to write clean code.

---

Overall, I now understand the foundational behavior of JavaScript and can write small logical programs.  
Some parts still need more repetition (especially comparisons and truthiness), but the base is clear and improving.


Was habe ich gelernt?

- Introduction to JavaScript
- Developer Console aufrufen (F12)
- Alerts zu schreiben und ein Script in HTML einzufügen
- Variablen mit let und const zu definieren
- Datentypen (String, Int, Boolean, Float, NULL, Objects)
- Interaction (alert, prompt, confirm): 
    alert:    shows a message.
    prompt:    shows a message asking the user to input text. It returns the text or, if Cancel button or Esc is clicked, null.
    confirm:    shows a message and waits for the user to press “OK” or “Cancel”. It returns true for OK and false for Cancel/Esc.
- Type Conversion (String(); Number(); Boolean())
- Basic operators, Maths > Exponentiation:  ** > 2**3 => 8
Unary <> Binary: Mathematische Vorzeichen sind auch möglich solange der Operant/ das Argument alleine da steht
Der Unary Operator + kann ein String zu einer Zahl umwandeln => +"" => 0
Increment/decrement can only be applied to variables. Trying to use it on a value like 5++ will give an error.
The list of operators:

AND ( & )
OR ( | )
XOR ( ^ )
NOT ( ~ )
LEFT SHIFT ( << )
RIGHT SHIFT ( >> )
ZERO-FILL RIGHT SHIFT ( >>> )
- Comparisons
- Conditional branching: If
- Logical operators
- Nullish coalescing operator
- Loops: while and for
- The "switch" statement
- Functions
- Function expressions
- Arrow functions, the basics
- JavaScript specials

Was war schwierig?

- 'use strict' zu verstehen: Ab wann soll man old und ab wann modern Script auf einer Websseite ausführen?
- Den Komma Operator zu verstehen: The comma operator , is one of the rarest and most unusual operators. Sometimes, it’s used to write shorter code, so we need to know it in order to understand what’s going on.
- nullish coalescing operator '??' -> gibt den ersten defined Wert zurück. Trotzdem ist mir das zu abstrakt.

The comma operator allows us to evaluate several expressions, dividing them with a comma ,. Each of them is evaluated but only the result of the last one is returned.

Welche Fragen habe ich noch?

- Debuggen im Webbrowser: Die Grundlagen verstehe ich aber was wenn es schwieriger wird
- Richtiger Umgang mit den Entwicklertools im Webbrowser
- Das ist für mich ein einziges Fragezeichen:
Strange result: null vs 0
Let’s compare null with a zero:

alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true
Mathematically, that’s strange. The last result states that “null is greater than or equal to zero”, so in one of the comparisons above it must be true, but they are both false.

The reason is that an equality check == and comparisons > < >= <= work differently. Comparisons convert null to a number, treating it as 0. That’s why (3) null >= 0 is true and (1) null > 0 is false.

On the other hand, the equality check == for undefined and null is defined such that, without any conversions, they equal each other and don’t equal anything else. That’s why (2) null == 0 is false.
- Label bei Loops um aus einem Loop rauszubrechen
