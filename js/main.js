//Algoritmo con condicional y ciclo//
alert("Welcome to my first Javascript Project");

let yourName = prompt("What is your name?");
let count = 0;

//ciclo//
while (!yourName) {
    alert("Name cannot be empty");

    yourName = prompt("What is your name?");
}
for (i = 1; i <= yourName.length; i++) {
    count++
}

let knowMore = prompt(
    "Hello " + yourName + ", your name has "+ count + " characters, would you like to know more about this new program?"
);

console.log(yourName);
console.log(knowMore);

if (knowMore.toLowerCase() == "yes") {
    alert("Thank you, let me tell you more about this.");
    let yearBorn = prompt('Please submit the year you were born');
    let currentYear = new Date().getFullYear(); 
    console.log(currentYear)
    let result = (currentYear - yearBorn);

    alert('You are ' + result + ' years old');

    if (result >= 8) {
        alert('Welcome to pokeapp') 
    } else {
        alert('Thank you for coming. Bye')
    }
    
} else {
    alert("Thank you, hope to see you again");
}





