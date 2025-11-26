/*TASK:
Using "this" in object literal
importance: 5
Here the function makeUser returns an object.

What is the result of accessing its ref? Why?*/

// Ich weiß es nicht im Text steht folgendes: When a function is called in the “method” syntax: object.method(), the value of this during the call is object.

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); // What's the result? -> John


/*SOLUTION:
Answer: an error.

Try it:

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); // Error: Cannot read property 'name' of undefined
That’s because rules that set this do not look at object definition. Only the moment of call matters.

Here the value of this inside makeUser() is undefined, because it is called as a function, not as a method with “dot” syntax.

The value of this is one for the whole function, code blocks and object literals do not affect it.

So ref: this actually takes current this of the function.

We can rewrite the function and return the same this with undefined value:

function makeUser(){
  return this; // this time there's no object literal
}

alert( makeUser().name ); // Error: Cannot read property 'name' of undefined
As you can see the result of alert( makeUser().name ) is the same as the result of alert( user.ref.name ) from the previous example.

Here’s the opposite case:

function makeUser() {
  return {
    name: "John",
    ref() {
      return this;
    }
  };
}

let user = makeUser();

alert( user.ref().name ); // John
Now it works, because user.ref() is a method. And the value of this is set to the object before dot .. <- Dieser Satz ist wichtig!
*/

/*TASK:
Create an object calculator with three methods:

read() prompts for two values and saves them as object properties with names a and b respectively.
sum() returns the sum of saved values.
mul() multiplies saved values and returns the result.
let calculator = {
  // ... your code ...
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
*/

let calculator = {
  // ... your code ...
  read(){
    a = +prompt("Ich brauche eine Zahl",0);
    b = +prompt("Nochmal bitte",0);
  },

  sum(){
    return a + b;
  },

  mul(){
    return a*b;
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

/*SOLUTION:
let calculator = {
  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },

  read() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
*/

/*TASK:
Chaining
importance: 2
There’s a ladder object that allows you to go up and down:

let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // shows the current step
    alert( this.step );
  }
};
Now, if we need to make several calls in sequence, we can do it like this:

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0
Modify the code of up, down, and showStep to make the calls chainable, like this:

ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0
Such an approach is widely used across JavaScript libraries.
*/
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() { // shows the current step
    alert( this.step );
    return this;
  }
};

ladder.up().up().down().showStep().down().showStep();

/*SOLUTION:
The solution is to return the object itself from every call.

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    alert( this.step );
    return this;
  }
};

ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0
We also can write a single call per line. For long chains it’s more readable:

ladder
  .up()
  .up()
  .down()
  .showStep() // 1
  .down()
  .showStep(); // 0
*/