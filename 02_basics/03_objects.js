// singleton
// Object.create


// object literals

const mySym = Symbol("key1");

const Jsuser = {
    name: "Jagdish",
    "full name": "Jagdish Mahanta",
    [mySym]: "mykey1",
    age: 25,
    location: "bangalore",
    email: "jagdish@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ['Monday', "Staturday"]
}

console.log(Jsuser.email);
console.log(Jsuser["full name"]);
console.log(Jsuser[mySym]);


Jsuser.email = "jagdish123@gmail.com";
// Object.freeze(Jsuser);


Jsuser.greeting = function () {
    console.log("Hello Js User");
}

Jsuser.greetingTwo = function () {
    console.log(`Hello Js User, ${this.name}`);
}


console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());
