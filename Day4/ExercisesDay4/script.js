//Small exercise: create an object representing a user and manipulate its values.

let user = {
    name: "Andreas",
    age: 18,
    "Eye color": "Green",
};

for (let key in user){
    console.log(user[key]);
}

user.name = "Otto";
user.age = 22;
user["Eye color"] = "Blue";

for (let key in user){
    console.log(user[key]);
}

//Exercise: create a `Animal` class and derive `Cat` and `Dog`.

class Animal{
    constructor(name){
        this.name = name;
        this.speed = 0;
        this.legCount = 4;
    }
    run(speed){
        this.speed = speed;
        alert(this.name + " runs with speed " + this.speed);
    }

    stop(){
        this.speed = 0;
        alert(this.name + " stands still.");
    }
}

class Cat extends Animal{
    sound(){
        alert(this.name + " meows.");
    }
}

let cat = new Cat("Black Cat");
cat.sound();
cat.run(10);
cat.stop();
