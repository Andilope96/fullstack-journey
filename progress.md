## Tag 1 – Zusammenfassung

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

Was hat Klick gemacht?
- Alles bisher gab es keine Verständnis Probleme

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
