//assignment no 09
var favouritedResult = 10;
var messageResult = "My favourite number: ".concat(favouritedResult);
console.log(messageResult);
//assignment no 10
// this program adds two number and prints the result
// define two numbers
var number1 = 20;
var number2 = 10;
//Add two numbers
var result = number1 + number2;
//print result
console.log(result);
//assignment no 11
//array
//Defines an array of names
var names = ["Rafiq", "Kashan", "Sameer", "Abdul ahad"];
// loop
// for each
// for loop
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
//for each
names.forEach(function (friend) {
    console.log(friend);
});
//for of loop
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var friendName = names_1[_i];
    console.log(friendName);
}
//assignment no 12
var names = ["Rafiq", "Kashan", "sameer", "Abdul ahad"];
var message = "How are you?";
console.log(names[0] + " " + message);
console.log(names[1] + " " + message);
console.log(names[2] + " " + message);
console.log(names[3] + " " + message);
//assignment no 13
var transpotation = ["Honda Motorcycle", "Audi", "Honda City"];
transpotation.map(function (items) { return console.log("I would like to own a ".concat(items)); });
//assignment no 14
var guestArr = ["Kashan", "sameer", "Abdul ahad"];
guestArr.map(function (items) { return (console.log("Dear ".concat(items, " , You are invited to the dinner"))); });
//assignment no 15
var guestArr = ["Rafiq", "Wasi khan", "sameer", "Abdul ahad"];
var canNotAttend = "sameer";
console.log(canNotAttend + " ", "can not attend the dinner.");
var newGuest = "Wasi khan";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
//console.log(guestArr)
guestArr.map(function (items) {
    return console.log("Dear ".concat(items, ", you are invited to the dinner."));
});
