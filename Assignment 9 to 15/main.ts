//assignment no 09
let favouritedResult:number = 10;

let messageResult:string = `My favourite number: ${favouritedResult}`;

console.log(messageResult);

//assignment no 10

// this program adds two number and prints the result

// define two numbers
let number1:number = 20;
let number2:number = 10;
//Add two numbers
let result:number = number1 + number2;
//print result
console.log(result);

//assignment no 11
//array
//Defines an array of names
let names: string[] = ["Rafiq", "Kashan", "Sameer", "Abdul ahad"];

// loop
// for each
// for loop

for (let i = 0; i < names.length; i++){
    console.log(names[i]);
}

//for each
names.forEach(friend => {
    console.log(friend);
});

//for of loop
for (const friendName of names) {
    console.log(friendName);
}

//assignment no 12

let names : string [] = ["Rafiq","Kashan","sameer","Abdul ahad"];

let message : string = "How are you?"
console.log(names[0] + " "+ message )
console.log(names[1] + " "+ message )
console.log(names[2] + " "+ message )
console.log(names[3] + " "+ message )

//assignment no 13

let transpotation : string [] = ["Honda Motorcycle","Audi", "Honda City"];
transpotation.map((items) => console.log(`I would like to own a ${items}`));

//assignment no 14

let guestArr : string [] = ["Kashan","sameer","Abdul ahad"];

guestArr.map((items) => (console.log(`Dear ${items} , You are invited to the dinner`)));

//assignment no 15

let guestArr : string[] = ["Rafiq","Wasi khan","sameer","Abdul ahad"];
let canNotAttend : string = "sameer"

console.log(canNotAttend + " " "can not attend the dinner.")

let newGuest : string = "Wasi khan"

guestArr [guestArr.indexOf(canNotAttend)] = newGuest;

//console.log(guestArr)

guestArr.map((items) =>
console.log(`Dear ${items}, you are invited to the dinner.`)
)





 


    

